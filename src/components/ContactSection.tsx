
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form fields if needed
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-navy">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              I'm always interested in new opportunities, collaborations, and conversations.
              Feel free to reach out through any of the channels below or using the form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="text-purple w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">angelshalini32066@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-purple w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="text-purple w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Your Name" required className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required className="w-full" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Subject" required className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={4} required className="w-full" />
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-purple hover:bg-purple/90 text-white">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
