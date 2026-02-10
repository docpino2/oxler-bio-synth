import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert(form);
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: "No se pudo enviar el mensaje.", variant: "destructive" });
    } else {
      toast({ title: "Enviado", description: "Nos pondremos en contacto pronto." });
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contacto" className="section-padding border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-mono">Conecta</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Contacto</h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-none text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-none text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors font-mono"
            />
          </div>
          <textarea
            placeholder="Mensaje"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-none text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none font-mono"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider rounded-none hover:shadow-[0_0_30px_hsl(185_80%_55%/0.3)] transition-shadow disabled:opacity-50"
          >
            <Send size={14} />
            {loading ? "Enviando..." : "Enviar mensaje"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
