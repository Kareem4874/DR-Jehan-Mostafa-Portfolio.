'use client';
import { useState, useRef } from 'react';

/**
 * ============================================
 * FILE UPLOAD COMPONENT
 * ============================================
 *
 * Handles payment receipt uploads with:
 * - Drag & drop support
 * - File validation
 * - Preview display
 * - Progress indication
 * - Error handling
 */

interface FileUploadProps {
  label?: string;
  onUploadComplete: (url: string | null) => void;
  error?: string;
  required?: boolean;
  accept?: string;
  maxSize?: number; // in MB
}

export default function FileUpload({
  label,
  onUploadComplete,
  error,
  required = false,
  accept = 'image/jpeg,image/jpg,image/png,image/webp,application/pdf',
  maxSize = 5,
}: FileUploadProps) {
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Handle file selection/drop
   */
  const handleFileChange = async (file: File | null) => {
    if (!file) return;

    setUploadError('');
    setUploadSuccess(false);

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setUploadError(`File size must be less than ${maxSize}MB`);
      onUploadComplete(null);
      return;
    }

    // Validate file type
    const validTypes = accept.split(',').map((t) => t.trim());
    const isValidType = validTypes.some((type) => {
      if (type.endsWith('/*')) {
        const mainType = type.split('/')[0];
        return file.type.startsWith(mainType);
      }
      return file.type === type;
    });

    if (!isValidType) {
      setUploadError(
        'Invalid file type. Only JPG, PNG, WebP, and PDF files are allowed.'
      );
      onUploadComplete(null);
      return;
    }

    setFileName(file.name);

    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }

    // Upload file
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('receipt', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        onUploadComplete(result.url);
        setUploadSuccess(true);
      } else {
        setUploadError(result.error || 'Upload failed');
        onUploadComplete(null);
      }
    } catch (err) {
      console.error('Upload error:', err);
      setUploadError('Failed to upload file. Please try again.');
      onUploadComplete(null);
    } finally {
      setUploading(false);
    }
  };

  /**
   * Handle drag events
   */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  /**
   * Clear file
   */
  const clearFile = () => {
    setFileName('');
    setPreview(null);
    setUploadError('');
    setUploadSuccess(false);
    onUploadComplete(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const displayError = error || uploadError;

  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {/* Upload Area */}
      <div
        className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all duration-300 ${isDragging ? 'scale-[1.02] border-primary bg-primary/5' : ''} ${displayError ? 'border-red-500 bg-red-50/50' : 'border-gray-300 hover:border-primary hover:bg-gray-50'} ${uploadSuccess ? 'border-green-500 bg-green-50/50' : ''} ${uploading ? 'pointer-events-none opacity-70' : ''} `}
        onClick={() => !uploading && inputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          accept={accept}
          className="hidden"
          disabled={uploading}
          aria-label="Upload receipt file"
        />

        {uploading ? (
          // Uploading State
          <div className="space-y-4">
            <div className="relative mx-auto h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
            <p className="font-medium text-gray-600">Uploading...</p>
            <div className="mx-auto h-2 w-48 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-3/4 animate-pulse rounded-full bg-primary"></div>
            </div>
          </div>
        ) : preview ? (
          // Preview State (Image)
          <div className="space-y-4">
            <img
              src={preview}
              alt="Receipt preview"
              className="mx-auto max-h-48 rounded-lg shadow-md"
            />
            <p className="mx-auto max-w-xs truncate text-sm font-medium text-gray-600">
              {fileName}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center text-sm font-medium text-green-600">
                <svg
                  className="mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Uploaded
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ) : fileName && uploadSuccess ? (
          // Preview State (PDF)
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-red-100">
              <svg
                className="h-8 w-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mx-auto max-w-xs truncate text-sm font-medium text-gray-600">
              {fileName}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center text-sm font-medium text-green-600">
                <svg
                  className="mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Uploaded
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
                className="text-sm font-medium text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          // Initial State
          <div className="space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100">
              <svg
                className="h-8 w-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-700">
                {isDragging
                  ? 'Drop file here'
                  : 'Click to upload or drag & drop'}
              </p>
              <p className="mt-1 text-sm text-gray-400">
                JPG, PNG, WebP, or PDF (Max {maxSize}MB)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {displayError && (
        <p className="mt-2 flex items-center text-sm text-red-500">
          <svg
            className="mr-1 h-4 w-4 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {displayError}
        </p>
      )}
    </div>
  );
}
