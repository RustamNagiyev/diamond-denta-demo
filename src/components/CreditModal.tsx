import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_RAW, CLINIC_WHATSAPP_LINK } from '../data/clinicData';

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CreditModal: React.FC<CreditModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [estimatedCost, setEstimatedCost] = useState(2400);
  const [months, setMonths] = useState(12);

  if (!isOpen) return null;

  const monthlyPayment = Math.round(estimatedCost / months);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#141418] border border-[#C9A96E]/30 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#E5E1E4] max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A8A39A] hover:text-[#F5F1EA] rounded-full hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium">
            Ödəniş Şərtləri & Taksit
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1EA]">
            Kredit və Hissə-Hissə Ödəniş İmkanı
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A39A]">
            Heç bir komissiya olmadan, estetik gülüşünüzə 18 ayadək rahat taksit imkanları ilə sahib olun.
          </p>
        </div>

        {/* Key highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 bg-[#1C1B20] border border-[#C9A96E]/15 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-[#C9A96E] mb-1.5" />
            <div className="text-xs font-medium text-[#F5F1EA]">0% Komissiya</div>
            <div className="text-[11px] text-[#A8A39A]">Bank və daxili komissiya yoxdur</div>
          </div>
          <div className="p-3.5 bg-[#1C1B20] border border-[#C9A96E]/15 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#C9A96E] mb-1.5" />
            <div className="text-xs font-medium text-[#F5F1EA]">18 Aya Qədər</div>
            <div className="text-[11px] text-[#A8A39A]">BirBank, TamKart, Bolkart ilə</div>
          </div>
          <div className="p-3.5 bg-[#1C1B20] border border-[#C9A96E]/15 rounded-xl">
            <Calculator className="w-4 h-4 text-[#C9A96E] mb-1.5" />
            <div className="text-xs font-medium text-[#F5F1EA]">Daxili Hissə-Hissə</div>
            <div className="text-[11px] text-[#A8A39A]">Mərhələli prosedur ödənişi</div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="p-5 bg-[#0E0E10] border border-[#C9A96E]/20 rounded-xl mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-[#A8A39A]">
              Təxmini Xidmət Məbləği:
            </span>
            <span className="font-serif text-xl text-[#C9A96E]">
              {estimatedCost} AZN
            </span>
          </div>
          
          <input
            type="range"
            min={500}
            max={8000}
            step={100}
            value={estimatedCost}
            onChange={(e) => setEstimatedCost(Number(e.target.value))}
            className="w-full h-1.5 bg-[#2A2A30] rounded-lg appearance-none cursor-pointer accent-[#C9A96E] mb-4"
          />

          <div className="flex items-center justify-between text-xs text-[#A8A39A] mb-4">
            <span>Müddət seçimi:</span>
            <div className="flex gap-2">
              {[3, 6, 12, 18].map((m) => (
                <button
                  key={m}
                  onClick={() => setMonths(m)}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    months === m
                      ? 'bg-[#C9A96E] text-[#0A0A0C] font-semibold'
                      : 'bg-[#1C1B20] text-[#A8A39A] hover:text-[#F5F1EA]'
                  }`}
                >
                  {m} ay
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-[#A8A39A]">Aylıq ödəniş:</span>
            <span className="font-serif text-2xl text-[#F5F1EA]">
              ~{monthlyPayment} AZN <span className="text-xs text-[#A8A39A] font-sans">/ ay</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="flex-1 py-3 px-5 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Konsultasiyaya Yazılın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={CLINIC_WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 border border-[#C9A96E]/40 hover:border-[#C9A96E] text-[#F5F1EA] text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-white/5"
          >
            WhatsApp ilə Məsləhət ({CLINIC_PHONE_DISPLAY})
          </a>
        </div>

      </div>
    </div>
  );
};
