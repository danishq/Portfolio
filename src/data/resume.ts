import type { ResumeConfig } from '../types';

export const RESUME_CONFIG: ResumeConfig = {
  url: '/resume.pdf',
  filename: 'Danish-Qureshi-Resume.pdf',
};

/**
 * Handles clean file download or graceful fallback if the asset is missing
 */
export async function downloadResumeFile(): Promise<boolean> {
  try {
    const link = document.createElement('a');
    link.href = RESUME_CONFIG.url;
    link.download = RESUME_CONFIG.filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error('Failed to trigger resume download:', error);
    return false;
  }
}
