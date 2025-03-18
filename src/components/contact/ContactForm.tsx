
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionError, setSubmissionError] = React.useState<string | null>(null);

  // Initialize form with validation schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    setSubmissionError(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);

      // Simulate successful submission (95% success rate)
      if (Math.random() > 0.05) {
        form.reset();
        toast({
          title: "Message sent successfully",
          description: "We'll get back to you as soon as possible.",
          variant: "default"
        });
      } else {
        // Simulate error
        setSubmissionError("There was an error sending your message. Please try again.");
      }
    }, 1500);
  };

  return (
    <section className="py-12 bg-white transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mx-auto max-w-4xl transition-all duration-300 ease-in-out hover:shadow-md">
          <div className="mx-auto w-full max-w-md p-8">

            <h2 className="font-display text-2xl font-semibold text-primary-800 mb-6 text-center animate-fade-in">Send Us a Message</h2>

            {submissionError && (
              <Alert variant="destructive" className="mb-6 animate-fade-in">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{submissionError}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField 
                  control={form.control} 
                  name="name" 
                  render={({ field }) => (
                    <FormItem className="transition-all duration-300 ease-in-out">
                      <FormLabel className="text-sm font-medium text-gray-700">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className={`transition-all duration-300 ease-in-out ${form.formState.errors.name ? "border-red-300" : "hover:border-primary-300 focus:border-primary-400"}`} 
                        />
                      </FormControl>
                      <FormMessage className="animate-fade-in" />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem className="transition-all duration-300 ease-in-out">
                      <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john.doe@example.com" 
                          type="email" 
                          {...field} 
                          className={`transition-all duration-300 ease-in-out ${form.formState.errors.email ? "border-red-300" : "hover:border-primary-300 focus:border-primary-400"}`} 
                        />
                      </FormControl>
                      <FormMessage className="animate-fade-in" />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="subject" 
                  render={({ field }) => (
                    <FormItem className="transition-all duration-300 ease-in-out">
                      <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can we help?" 
                          {...field} 
                          className={`transition-all duration-300 ease-in-out ${form.formState.errors.subject ? "border-red-300" : "hover:border-primary-300 focus:border-primary-400"}`} 
                        />
                      </FormControl>
                      <FormMessage className="animate-fade-in" />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="message" 
                  render={({ field }) => (
                    <FormItem className="transition-all duration-300 ease-in-out">
                      <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how we can help you..." 
                          rows={5} 
                          {...field} 
                          className={`transition-all duration-300 ease-in-out ${form.formState.errors.message ? "border-red-300" : "hover:border-primary-300 focus:border-primary-400"}`} 
                        />
                      </FormControl>
                      <FormMessage className="animate-fade-in" />
                    </FormItem>
                  )} 
                />
                
                <Button 
                  type="submit" 
                  className="w-full button-primary transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && form.formState.isSubmitted && !form.formState.isDirty && (
                    <CheckCircle className="ml-2 h-4 w-4 animate-fade-in" />
                  )}
                </Button>
                
                {form.formState.isSubmitted && form.formState.isValid && !isSubmitting && !form.formState.isDirty && (
                  <div className="text-center text-sm text-green-600 mt-2 animate-fade-in">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
