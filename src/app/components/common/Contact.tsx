"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type ContactFormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const schema: yup.ObjectSchema<ContactFormValues> = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().optional(),
  message: yup.string().required('Message is required')
});
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/xnnbwboq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || '',
          message: data.message
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        const msg = (result && (result.error || result.errors?.[0]?.message)) || 'Something went wrong. Please try again.';
        setError(msg);
      }
    } catch (e) {
      setError('Network error. Please try again later.');
    }
  };
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Contact</motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.form onSubmit={handleSubmit(onSubmit)} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 grid gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div>
              <input aria-invalid={!!errors.name} {...register('name')} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm" placeholder="Name" />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <input aria-invalid={!!errors.email} {...register('email')} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm" placeholder="Email" type="email" />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <input {...register('subject')} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm" placeholder="Subject" />
            </div>
            <div>
              <textarea aria-invalid={!!errors.message} {...register('message')} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm" placeholder="Message" rows={5} />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
            </div>
            <button className="inline-flex justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-70" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
            {submitted && <p className="text-xs text-green-600">Thanks! Your message has been sent.</p>}
            {error && <p className="text-xs text-red-600">{error}</p>}
          </motion.form>

          <motion.div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-semibold">Other ways to reach me</h3>
            <ul className="mt-3 grid gap-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Email: kartikjoshi0172@gmail.com</li>
              <li>LinkedIn: linkedin.com/in/kartikj360</li>
              <li>Location: India </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

