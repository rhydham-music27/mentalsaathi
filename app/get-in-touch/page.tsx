"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
import {
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  HandHeart,
  ArrowLeft,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function GetInTouchPage() {
  const router = useRouter();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [role, setRole] = useState("");
  const [ngo, setNgo] = useState("");

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
          <Users className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Join Our Mission
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Are you passionate about mental health? Join our community of
            therapists, psychology students, and volunteers making a difference.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Collaboration Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Stethoscope className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Licensed Therapists
              </h3>
              <p className="text-slate-600 mb-4">
                Share your expertise, review content, and help us create
                evidence-based resources for our community.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Content review and validation</li>
                <li>• Resource development</li>
                <li>• Community guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <GraduationCap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Psychology Students
              </h3>
              <p className="text-slate-600 mb-4">
                Gain practical experience while contributing to meaningful
                mental health initiatives and research.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Research assistance</li>
                <li>• Content creation</li>
                <li>• Peer support facilitation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <HandHeart className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Volunteers
              </h3>
              <p className="text-slate-600 mb-4">
                Use your skills and passion to support our community through
                various volunteer opportunities.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Community moderation</li>
                <li>• Event organization</li>
                <li>• Outreach programs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Collaboration Form */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center">
                  <Star className="h-6 w-6 text-emerald-600 mr-2" />
                  Collaboration Application
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form
                  onSubmit={async (evemt) => {
                    evemt.preventDefault();
                    const response = await fetch(
                      "https://mentalsaathi-express-backend.onrender.com/api/v1/interaction/getintouch",

                      {
                        method: "post",
                        headers: {
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                          email: email,
                          name: `${first_name} ${last_name}`,
                          phone: phone_number,
                          role: role,
                          institution: ngo,
                        }),
                      }
                    );
                    console.log("clicked");
                    const res = await response.json();

                    if (res.success === true) {
                      toast.success(res.message);
                      router.push("/");
                    } else {
                      toast.error(res.message);
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
                      Phone Number *
                    </label>
                    <Input
                      onChange={(event) => {
                        setPhone_number(event.target.value);
                      }}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="border-slate-200 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      I&apos;m interested in collaborating as a *
                    </label>
                    <Select onValueChange={setRole} value={role}>
                      <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapist">
                          Licensed Therapist
                        </SelectItem>
                        <SelectItem value="student">
                          Psychology Student
                        </SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Institution/Organization
                    </label>
                    <Input
                      onChange={(event) => {
                        setNgo(event.target.value);
                      }}
                      type="text"
                      placeholder="University, Hospital, Clinic, etc."
                      className="border-slate-200 focus:border-emerald-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            {/* What to Expect */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Ongoing Support
                    </h4>
                    <p className="text-sm text-slate-600">
                      Regular check-ins and professional development
                      opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Benefits of Collaborating
                </h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Make a meaningful impact on mental health awareness</li>
                  <li>• Gain experience in digital mental health platforms</li>
                  <li>• Network with like-minded professionals</li>
                  <li>• Flexible, remote collaboration opportunities</li>
                  <li>• Professional development and training</li>
                  <li>• Certificate of collaboration for your portfolio</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact for Questions */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Have Questions?
                </h3>
                <p className="text-slate-600 mb-4">
                  We&apos;re here to help! Reach out if you have any questions
                  about collaboration opportunities.
                </p>
                <Button
                  onSubmit={() => {
                    router.push("/contact");
                  }}
                  variant="outline"
                  className="border-rose-200 text-rose-700 hover:bg-rose-50"
                >
                  Contact Our Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
