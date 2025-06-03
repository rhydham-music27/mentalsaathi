"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  MessageCircle,
  BookOpen,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MentalSaathiLanding() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-800">
              Mental Saathi
            </span>
          </div>
          <Button
            onClick={() => {
              router.push("/contact");
            }}
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            Contact Us
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-emerald-500 mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Andar ki baat, ab <span className="text-emerald-600">Saathi</span>{" "}
            ke saath.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your mental wellness journey starts here. Find support, resources,
            and a caring community.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Mental Saathi is a student-led digital platform offering emotional
              support, wellness resources, and community connections for people
              facing mental health challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive support designed to help you on your mental wellness
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Safe Conversations
              </h3>
              <p className="text-slate-600">
                Connect with trained listeners and peers in a secure,
                judgment-free environment
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Guided Self-Help Tools
              </h3>
              <p className="text-slate-600">
                Access evidence-based resources, exercises, and tools for
                personal growth
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Peer Support
              </h3>
              <p className="text-slate-600">
                Join supportive communities and connect with others who
                understand your journey
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Email Signup */}
      <section className="container mx-auto px-4 py-16" id="#wait-list-form">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
            <Mail className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Be the First to Know
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join our waitlist to get early access and updates about Mental
              Saathi
            </p>
            <form
              onSubmit={async (event) => {
                event.preventDefault();

                const response = await fetch(
                  "https://mentalsaathi-express-backend.onrender.com/api/v1/interaction/waitinglist",

                  {
                    method: "post",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                      email: email,
                    }),
                  }
                );
                console.log("clicked");
                const res = await response.json();

                if (res.success === true) {
                  toast.success(res.message);
                }
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
              >
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Are you a therapist, psychology student, or volunteer passionate
            about mental health? We&apos;d love to collaborate with you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Heart className="h-10 w-10 text-rose-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Therapists</h3>
              <p className="text-sm text-slate-600">
                Share your expertise and help us create better resources
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Students</h3>
              <p className="text-sm text-slate-600">
                Gain experience while making a meaningful impact
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-800 mb-2">Volunteers</h3>
              <p className="text-sm text-slate-600">
                Contribute your time and skills to support others
              </p>
            </div>
          </div>

          <Button
            onClick={() => {
              router.push("/get-in-touch");
            }}
            variant="outline"
            size="lg"
            className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 px-8 py-3"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">Mental Saathi</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Supporting mental wellness through community, resources, and
                compassionate care.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>rhydham937@gmail.com</span>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Batala, India</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Mental Saathi. All rights
              reserved. Made with ❤️ for mental wellness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
