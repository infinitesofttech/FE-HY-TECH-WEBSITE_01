/**
 * HY-TECH Hub Submission Persistence Utility
 * Manages form submissions for Applications & Inquiries.
 */

const DEFAULT_SAMPLE_APPLICATIONS = [
  {
    id: 'APP-924108',
    type: 'application',
    name: 'Ramesh Patel',
    mobile: '9876543210',
    service: 'PAN Card (New / Correction)',
    serviceSlug: 'pan-card-new-correction',
    category: 'Identity Proof',
    message: 'Required urgent update for bank account linking.',
    submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'in_progress',
  },
  {
    id: 'APP-810492',
    type: 'application',
    name: 'Ramesh Patel',
    mobile: '9876543210',
    service: 'Aadhaar Biometric & Mobile Link',
    serviceSlug: 'aadhaar-biometric-mobile-update',
    category: 'Identity Proof',
    message: 'Fingerprint update and phone verification.',
    submittedAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    status: 'completed',
  }
];

export const getSubmissions = (type = 'application') => {
  try {
    const storageKey = type === 'inquiry' ? 'hytech_inquiries' : 'hytech_applications';
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
    // Initialize default samples if empty for applications
    if (type === 'application') {
      localStorage.setItem(storageKey, JSON.stringify(DEFAULT_SAMPLE_APPLICATIONS));
      return DEFAULT_SAMPLE_APPLICATIONS;
    }
    return [];
  } catch (err) {
    console.error('Failed to get submissions from localStorage:', err);
    return [];
  }
};

export const saveSubmission = async (type, payload) => {
  // Simulate network latency for smooth UI feedback and loading state
  await new Promise((resolve) => setTimeout(resolve, 550));

  if (!payload || !payload.name || !payload.name.trim()) {
    throw new Error('Full name is required to submit your request.');
  }

  const rawPhone = String(payload.mobile || '').trim();
  const digitsOnly = rawPhone.replace(/\D/g, '');
  if (digitsOnly.length !== 10) {
    throw new Error('Please provide a valid 10-digit mobile number.');
  }

  const storageKey = type === 'inquiry' ? 'hytech_inquiries' : 'hytech_applications';
  const prefix = type === 'inquiry' ? 'INQ' : 'APP';
  const id = `${prefix}-${Date.now().toString().slice(-6)}`;

  const record = {
    id,
    type,
    name: payload.name.trim(),
    mobile: digitsOnly,
    service: payload.service || 'General Service',
    serviceSlug: payload.serviceSlug || '',
    category: payload.category || 'Government Citizen Service',
    message: payload.message ? payload.message.trim() : '',
    submittedAt: new Date().toISOString(),
    status: 'received',
    isNew: true
  };

  try {
    const existingRaw = localStorage.getItem(storageKey);
    const list = existingRaw ? JSON.parse(existingRaw) : (type === 'application' ? [...DEFAULT_SAMPLE_APPLICATIONS] : []);
    list.unshift(record);
    localStorage.setItem(storageKey, JSON.stringify(list));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hytech_submissions_updated', { detail: { type, record } }));
    }

    return record;
  } catch (err) {
    console.error('Failed to store submission in localStorage:', err);
    throw new Error('Storage error: unable to record your application. Please call or WhatsApp us directly.');
  }
};

export const updateSubmissionStatus = (id, newStatus, type = 'application') => {
  try {
    const storageKey = type === 'inquiry' ? 'hytech_inquiries' : 'hytech_applications';
    const list = getSubmissions(type);
    const updated = list.map((item) => (item.id === id ? { ...item, status: newStatus } : item));
    localStorage.setItem(storageKey, JSON.stringify(updated));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hytech_submissions_updated', { detail: { type, id, newStatus } }));
    }

    return updated;
  } catch (err) {
    console.error('Failed to update submission status:', err);
    return [];
  }
};

export const deleteSubmission = (id, type = 'application') => {
  try {
    const storageKey = type === 'inquiry' ? 'hytech_inquiries' : 'hytech_applications';
    const list = getSubmissions(type);
    const updated = list.filter((item) => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hytech_submissions_updated', { detail: { type, id } }));
    }

    return updated;
  } catch (err) {
    console.error('Failed to delete submission:', err);
    return [];
  }
};
