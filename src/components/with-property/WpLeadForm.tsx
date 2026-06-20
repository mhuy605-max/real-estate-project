import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useLang } from "@/components/site/LangContext";
import { t } from "@/components/site/translations";
import { WpReveal } from "./WpReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  customerType: z.string().min(1),
  area: z.string().optional(),
  budget: z.string().optional(),
  propertyType: z.string().optional(),
  size: z.string().optional(),
  moveIn: z.date().optional(),
  priorities: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function WpLeadForm() {
  const { lang } = useLang();
  const wp = t(lang).wp;
  const fm = wp.form;

  const [moveIn, setMoveIn] = useState<Date | undefined>();
  const [priorities, setPriorities] = useState<string[]>([]);
  const [calOpen, setCalOpen] = useState(false);

  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const togglePriority = (p: string) => {
    const next = priorities.includes(p) ? priorities.filter((x) => x !== p) : [...priorities, p];
    setPriorities(next);
    setValue("priorities", next);
  };

  const onSubmit = async (_data: FormValues) => {
    // TODO: POST to CRM/email endpoint once backend is wired
    await new Promise((r) => setTimeout(r, 400));
    toast.success(fm.success);
    reset();
    setPriorities([]);
    setMoveIn(undefined);
  };

  const fieldClass = "border-[var(--wp-border)] focus-visible:ring-[var(--wp-gold)] focus-visible:border-[var(--wp-gold)]";

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="mx-auto max-w-3xl">
        <WpReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="wp-gold-rule" />
              <span className="text-[var(--wp-gold)] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                {fm.eyebrow}
              </span>
              <div className="wp-gold-rule" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--wp-navy)] mb-3">
              {fm.title}
            </h2>
            <p className="text-[var(--wp-text-muted)]">{fm.subtitle}</p>
          </div>
        </WpReveal>

        <WpReveal delay={100}>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-sm border border-[var(--wp-border)] p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">
                  {fm.labels.name} <span className="text-red-500">*</span>
                </Label>
                <Input {...register("name")} placeholder={fm.placeholders.name} className={fieldClass} />
                {errors.name && <p className="text-red-500 text-xs">{fm.required}</p>}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">
                  {fm.labels.phone} <span className="text-red-500">*</span>
                </Label>
                <Input {...register("phone")} placeholder={fm.placeholders.phone} className={fieldClass} />
                {errors.phone && <p className="text-red-500 text-xs">{fm.required}</p>}
              </div>

              {/* Customer Type */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">
                  {fm.labels.customerType} <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(v) => setValue("customerType", v)}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent>
                    {fm.options.customerType.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.customerType && <p className="text-red-500 text-xs">{fm.required}</p>}
              </div>

              {/* Area */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.area}</Label>
                <Select onValueChange={(v) => setValue("area", v)}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent>
                    {fm.options.area.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.budget}</Label>
                <Select onValueChange={(v) => setValue("budget", v)}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent>
                    {fm.options.budget.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.propertyType}</Label>
                <Select onValueChange={(v) => setValue("propertyType", v)}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent>
                    {fm.options.propertyType.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.size}</Label>
                <Select onValueChange={(v) => setValue("size", v)}>
                  <SelectTrigger className={fieldClass}>
                    <SelectValue placeholder="—" />
                  </SelectTrigger>
                  <SelectContent>
                    {fm.options.size.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Move-in date */}
              <div className="space-y-2">
                <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.moveIn}</Label>
                <Popover open={calOpen} onOpenChange={setCalOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={`w-full justify-start text-left font-normal ${fieldClass} ${!moveIn ? "text-muted-foreground" : ""}`}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {moveIn ? format(moveIn, "PPP") : "—"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={moveIn}
                      onSelect={(d) => { setMoveIn(d ?? undefined); setValue("moveIn", d ?? undefined); setCalOpen(false); }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Priorities */}
            <div className="space-y-3">
              <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.priorities}</Label>
              <div className="flex flex-wrap gap-3">
                {fm.options.priorities.map((p) => (
                  <label key={p} className="flex items-center gap-2 cursor-pointer select-none">
                    <Checkbox
                      checked={priorities.includes(p)}
                      onCheckedChange={() => togglePriority(p)}
                      className="data-[state=checked]:bg-[var(--wp-navy)] data-[state=checked]:border-[var(--wp-navy)]"
                    />
                    <span className="text-sm text-[var(--wp-text-muted)]">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label className="text-[var(--wp-navy)] font-semibold text-sm">{fm.labels.notes}</Label>
              <Textarea
                {...register("notes")}
                placeholder={fm.placeholders.notes}
                rows={3}
                className={fieldClass}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full wp-gold-gradient border-0 text-[var(--wp-navy)] font-bold tracking-[0.15em] uppercase text-sm py-3 h-auto hover:opacity-90 disabled:opacity-60"
            >
              {isSubmitting ? "..." : fm.submit}
            </Button>
          </form>
        </WpReveal>
      </div>
    </section>
  );
}
