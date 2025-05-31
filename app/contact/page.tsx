"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Mail,
  Phone,
  MapPin,

  MessageCircle,
  HelpCircle,
  Users,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-800">
              Mental Saathi
            </span>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <MessageCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We&apos;re here to listen and help. Reach out to us anytime - your
            mental wellness matters to us.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center">
                  <Mail className="h-6 w-6 text-emerald-600 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    const response = await fetch(
                      "https://mentalsaathi-backend.onrender.com/forms/contact",

                      {
                        method: "post",
                        headers: {
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                          email: email,
                          first_name: first_name,
                          last_name: last_name,
                          phone_number: phone_number,
                          subject: subject,
                          message: message,
                        }),
                      }
                    );
                    console.log("clicked");
                    const res = await response.json();

                    if (res.success === true) {
                      toast.success(res.message);
                      router.push("/");
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        onChange={(event) => {
                          setFirst_name(event.target.value);
                        }}
                        type="text"
                        placeholder="Your first name"
                        className="border-slate-200 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        onChange={(event) => {
                          setLast_name(event.target.value);
                        }}
                        type="text"
                        placeholder="Your last name"
                        className="border-slate-200 focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-slate-200 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      onChange={(event) => {
                        setPhone_number(event.target.value);
                      }}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="border-slate-200 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <Select onValueChange={setSubject} value={subject}>
                      <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Need Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="border-slate-200 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">rhydham937@gmail.com</p>
               
                  </div>
                </div>


                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Address</h3>
                    <p className="text-slate-600">
                      MentalSaathi.com
                    </p>
                  </div>
                </div>

        
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <HelpCircle className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                </div>
                <p className="mb-4 opacity-90">
                  If youre experiencing a mental health crisis, please reach
                  out for immediate support.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Crisis Helpline:</strong> 1800-599-0019
                  </p>
                  <p>
                    <strong>AASRA:</strong> +91 22 2754 6669
                  </p>
                  <p>
                    <strong>Vandrevala Foundation:</strong> 1860-2662-345
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-slate-600 mb-4">
                  Find quick answers to common questions about our services and
                  platform.
                </p>
      
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
