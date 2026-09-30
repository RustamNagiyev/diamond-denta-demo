import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_WHATSAPP_LINK } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Vinir və Estetik Bərpa',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: defaultService,
    date: '',
    timeSlot: '11:00 - 13:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      service: defaultService,
      date: '',
      timeSlot: '11:00 - 13:00',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#141418] border border-[#C9A96E]/30 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#E5E1E4] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-[#A8A39A] hover:text-[#F5F1EA] rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium">
                Eksklüziv Qəbul
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1EA]">
                Qəbula yazılın
              </h2>
              <p className="text-xs text-[#A8A39A]">
                Zəhmət olmasa məlumatlarınızı qeyd edin. Koordinatorumuz sizinlə təsdiq üçün əlaqə saxlayacaqdır.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                  Ad və soyad <span className="text-[#C9A96E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Adınız və soyadınız"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                  Telefon nömrəsi <span className="text-[#C9A96E]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+994 50 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                  Xidmət
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                >
                  <option value="Vinir və Estetik Bərpa">Vinir və Estetik Bərpa</option>
                  <option value="Dental İmplantasiya">Dental İmplantasiya</option>
                  <option value="Ortodontik Müalicə və Qapaqlar">Ortodontik Müalicə və Qapaqlar</option>
                  <option value="Cərrahi Stomatologiya">Cərrahi Stomatologiya</option>
                  <option value="Ümumi Müayinə & DSD Gülüş Planlaması">Ümumi Müayinə & DSD Gülüş Planlaması</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                    Uyğun tarix
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                    Uyğun vaxt
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                  >
                    <option value="11:00 - 13:00">11:00 - 13:00</option>
                    <option value="13:00 - 15:00">13:00 - 15:00</option>
                    <option value="15:00 - 17:00">15:00 - 17:00</option>
                    <option value="17:00 - 19:00">17:00 - 19:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-1.5">
                  Qeyd (könüllü)
                </label>
                <textarea
                  rows={2}
                  placeholder="Əlavə qeydləriniz və ya istəkləriniz..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#0E0E10] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors resize-none"
                />
              </div>

              <p className="text-[11px] text-[#7A7771] leading-relaxed">
                Məlumatlarınız tam məxfi saxlanılır və yalnız klinika koordinatorunun sizinlə əlaqəsi üçün istifadə olunur.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(201,169,110,0.25)] cursor-pointer"
              >
                {isSubmitting ? 'Göndərilir...' : 'Rezerv göndər'}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5 animate-in fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A96E]/15 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1EA]">
                Rezerv Sorğunuz Qəbul Edildi
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A39A] max-w-md mx-auto">
                Hörmətli <span className="text-[#C9A96E] font-medium">{formData.fullName || 'Pasiyent'}</span>, qəbul istəyiniz qeydə alındı. Koordinatorumuz qısa müddətdə sizinlə təsdiq üçün əlaqə saxlayacaqdır.
              </p>
            </div>

            <div className="p-4 bg-[#0E0E10] border border-[#C9A96E]/20 rounded-xl max-w-sm mx-auto text-left text-xs space-y-2 text-[#E5E1E4]">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#A8A39A]">Xidmət:</span>
                <span className="font-medium text-[#C9A96E]">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-[#A8A39A]">Tarix & Vaxt:</span>
                <span>{formData.date || 'Ən yaxın vaxt'} • {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A8A39A]">Klinika Əlaqəsi:</span>
                <span className="font-medium">{CLINIC_PHONE_DISPLAY}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CLINIC_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ilə Təsdiqlə</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-6 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Bağla
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
