import { FormEvent, useMemo, useState } from 'react';
import { Loader2 } from 'lucide-react';

type ContactFormValues = {
  FNAME: string;
  LNAME: string;
  PHONE: string;
  EMAIL: string;
  MMERGE7: string;
  b_fa98c36703c84ad276b54273f_e0f2e6a454: string;
};

const MAILCHIMP_FORM_ACTION =
  'https://btsglobalbank.us10.list-manage.com/subscribe/post?u=fa98c36703c84ad276b54273f&id=e0f2e6a454&f_id=00efa4e3f0';
const MAILCHIMP_JSONP_ENDPOINT =
  'https://btsglobalbank.us10.list-manage.com/subscribe/post-json';

const INITIAL_VALUES: ContactFormValues = {
  FNAME: '',
  LNAME: '',
  PHONE: '',
  EMAIL: '',
  MMERGE7: '',
  b_fa98c36703c84ad276b54273f_e0f2e6a454: '',
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

interface ContactFormProps {
  variant?: 'modal' | 'page';
  onSuccess?: () => void;
}

export function ContactForm({ variant = 'modal', onSuccess }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const containerClasses = useMemo(
    () =>
      variant === 'page'
        ? 'w-full max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-8 shadow-2xl'
        : 'w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-8 shadow-2xl',
    [variant],
  );

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!values.FNAME.trim()) {
      newErrors.FNAME = 'Informe seu nome';
    }
    if (!values.LNAME.trim()) {
      newErrors.LNAME = 'Informe seu sobrenome';
    }
    if (!values.PHONE.trim()) {
      newErrors.PHONE = 'Informe um telefone válido';
    }
    if (!values.EMAIL.trim()) {
      newErrors.EMAIL = 'Informe um e-mail válido';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(values.EMAIL.trim())) {
        newErrors.EMAIL = 'Formato de e-mail inválido';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetMessages = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleChange = (field: keyof ContactFormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetMessages();

    if (values.b_fa98c36703c84ad276b54273f_e0f2e6a454.trim().length > 0) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitToMailchimp({
        FNAME: values.FNAME.trim(),
        LNAME: values.LNAME.trim(),
        PHONE: values.PHONE.trim(),
        EMAIL: values.EMAIL.trim(),
        MMERGE7: values.MMERGE7.trim(),
      });

      setSuccessMessage('Obrigado! Sua solicitação foi recebida.');
      setErrorMessage('');
      setValues(INITIAL_VALUES);
      setErrors({});
      onSuccess?.();
    } catch (error) {
      console.error('Mailchimp error:', error);
      setErrorMessage('Ocorreu um erro no envio. Tente novamente.');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={containerClasses}>
      <div className="mb-8 space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#00E5FF]/70 font-mono">
          BTS GLOBAL CORP
        </p>
        <h2 className="text-2xl md:text-3xl text-white font-semibold">
          Solicite o contato de um de nossos especialistas
        </h2>
        <p className="text-sm text-[#C6CEDF]/80">
          Receba uma análise personalizada sobre a melhor estrutura para o seu caso.
        </p>
      </div>

      <form
        className="space-y-6"
        action={MAILCHIMP_FORM_ACTION}
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            id="mce-FNAME"
            label="Nome *"
            placeholder="Seu nome"
            value={values.FNAME}
            error={errors.FNAME}
            onChange={handleChange('FNAME')}
          />

          <FormField
            id="mce-LNAME"
            label="Sobrenome *"
            placeholder="Seu sobrenome"
            value={values.LNAME}
            error={errors.LNAME}
            onChange={handleChange('LNAME')}
          />
        </div>

        <FormField
          id="mce-PHONE"
          label="Telefone *"
          type="tel"
          placeholder="+55 11 99999-0000"
          value={values.PHONE}
          error={errors.PHONE}
          onChange={handleChange('PHONE')}
        />

        <FormField
          id="mce-EMAIL"
          type="email"
          label="Email *"
          placeholder="voce@empresa.com"
          value={values.EMAIL}
          error={errors.EMAIL}
          onChange={handleChange('EMAIL')}
        />

        <div>
          <label className="block text-sm text-[#C6CEDF] mb-2" htmlFor="mce-MMERGE7">
            Mensagem (opcional)
          </label>
          <textarea
            id="mce-MMERGE7"
            name="MMERGE7"
            value={values.MMERGE7}
            onChange={handleChange('MMERGE7')}
            rows={4}
            placeholder="Conte-nos um pouco sobre seus objetivos ou dúvidas."
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 resize-none"
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="b_fa98c36703c84ad276b54273f_e0f2e6a454"
            tabIndex={-1}
            value={values.b_fa98c36703c84ad276b54273f_e0f2e6a454}
            onChange={handleChange('b_fa98c36703c84ad276b54273f_e0f2e6a454')}
            autoComplete="off"
          />
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] p-[1px] transition-all hover:shadow-lg hover:shadow-[#1F4AFF]/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="relative flex items-center justify-center gap-3 bg-[#050B18] rounded-lg px-6 py-4 group-hover:bg-transparent transition-all">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                  <span className="text-white font-medium">Enviando...</span>
                </>
              ) : (
                <span className="text-white font-medium">Enviar Solicitação</span>
              )}
            </div>
          </button>

          <div id="mce-success-response" className="text-sm text-green-400 min-h-[1.5rem]" role="status">
            {successMessage}
          </div>
          <div id="mce-error-response" className="text-sm text-red-400 min-h-[1.5rem]" role="alert">
            {errorMessage}
          </div>
        </div>
      </form>
    </div>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
}

function FormField({ id, label, value, onChange, placeholder, error, type = 'text' }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm text-[#C6CEDF] mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id.replace('mce-', '')}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="on"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
      />
      <p id={`${id}-error`} className="mt-1 text-sm text-red-400 min-h-[1.25rem]">
        {error}
      </p>
    </div>
  );
}

type MailchimpPayload = {
  FNAME: string;
  LNAME: string;
  PHONE: string;
  EMAIL: string;
  MMERGE7?: string;
};

function submitToMailchimp(payload: MailchimpPayload) {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Formulário indisponível no ambiente atual.'));
  }

  return new Promise((resolve, reject) => {
    const callbackName = `mcCallback_${Date.now()}`;
    const url = new URL(MAILCHIMP_JSONP_ENDPOINT);

    url.searchParams.append('u', 'fa98c36703c84ad276b54273f');
    url.searchParams.append('id', 'e0f2e6a454');
    url.searchParams.append('f_id', '00efa4e3f0');
    url.searchParams.append('c', callbackName);

    Object.entries(payload).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const script = document.createElement('script');
    script.src = url.toString();
    script.async = true;

    (window as Record<string, any>)[callbackName] = (response: any) => {
      delete (window as Record<string, any>)[callbackName];
      document.body.removeChild(script);

      if (response.result === 'success') {
        resolve(response);
      } else {
        const message = typeof response.msg === 'string'
          ? response.msg.replace(/<\/?[^>]+(>|$)/g, '').trim()
          : 'Erro desconhecido';
        reject(new Error(message));
      }
    };

    script.onerror = () => {
      delete (window as Record<string, any>)[callbackName];
      document.body.removeChild(script);
      reject(new Error('Não foi possível enviar sua solicitação.'));
    };

    document.body.appendChild(script);
  });
}
