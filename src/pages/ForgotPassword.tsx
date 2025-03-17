
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n/I18nContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

const ForgotPassword = () => {
  const { t } = useI18n();
  
  // Form validation schema
  const formSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
  });
  
  // Form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  
  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // TODO: Add actual password reset logic
  };
  
  return (
    <>
      <Helmet>
        <title>Forgot Password - SPENDLESS</title>
        <meta name="description" content="Reset your SPENDLESS account password." />
        <link rel="canonical" href="https://spendless.com/forgot-password" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 py-24">
        <div className="max-w-md w-full">
          <Card className="border-sand-200 shadow-lg">
            <CardHeader className="space-y-1 bg-sand-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center text-sand-900">Forgot your password?</CardTitle>
              <CardDescription className="text-center text-sand-600">
                Enter your email address and we'll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sand-800">Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-sand-500" />
                            <Input placeholder="yourname@example.com" className="pl-10 border-sand-200 focus:border-primary-300" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-600 text-white"
                  >
                    Send reset link
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 bg-sand-50 rounded-b-lg">
              <p className="text-center text-sand-700 text-sm">
                Remembered your password?{' '}
                <Link to="/signin" className="font-medium text-primary-600 hover:text-primary-700">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ForgotPassword;
