"use client"

import { useState } from "react"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Send, UploadCloud } from "lucide-react"

export default function AdmissionsForm() {
  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    guardianPhone: "",
    email: "",
    dob: "",
    gender: "",
    classApplied: "",
    bloodGroup: "",
    address: "",
    city: "",
    district: "",
    previousInstitute: "",
  })
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const onFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith("image/")) {
      Swal.fire({
        icon: "error",
        title: "ভুল ফাইল",
        text: "শুধুমাত্র ইমেজ ফাইল আপলোড করুন (JPG/PNG)।",
        confirmButtonColor: "#047857",
      })
      return
    }
    setPhotoFile(file)
    setPhotoPreview(URL.createObjectURL(file))
  }

  async function uploadToImgbb(file) {
    const body = new FormData()
    body.append("file", file)
    const res = await fetch("/api/upload-image", {
      method: "POST",
      body,
    })
    if (!res.ok) throw new Error("Upload failed")
    const json = await res.json()
    if (!json.success) throw new Error(json.message || "Upload failed")
    return json.url
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // Simple validation
    if (!form.studentName || !form.guardianPhone || !form.classApplied || !form.gender || !form.dob) {
      Swal.fire({
        icon: "error",
        title: "ফাঁকা ঘর পূরণ করুন",
        text: "শিক্ষার্থীর নাম, অভিভাবকের ফোন, শ্রেণি, লিঙ্গ ও জন্মতারিখ আবশ্যক।",
        confirmButtonColor: "#047857",
      })
      return
    }

    try {
      // Upload photo if present and not yet uploaded
      let finalPhoto = photoUrl
      if (photoFile && !photoUrl) {
        Swal.fire({
          title: "ছবি আপলোড হচ্ছে...",
          didOpen: () => Swal.showLoading(),
          allowOutsideClick: false,
        })
        finalPhoto = await uploadToImgbb(photoFile)
        setPhotoUrl(finalPhoto)
        Swal.close()
      }

      // Simulated submit (replace with your own API later)
      Swal.fire({
        icon: "success",
        title: "আবেদন গ্রহণ করা হয়েছে!",
        html: `<div style="text-align:left">
          <p><b>নাম:</b> ${form.studentName}</p>
          <p><b>শ্রেণি:</b> ${form.classApplied}</p>
          <p><b>অভিভাবকের ফোন:</b> ${form.guardianPhone}</p>
          ${finalPhoto ? `<p><b>ছবি:</b> <a href="${finalPhoto}" target="_blank" rel="noreferrer">দেখুন</a></p>` : ""}
        </div>`,
        confirmButtonColor: "#047857",
        confirmButtonText: "ঠিক আছে",
      })

      // Reset form (optional)
      // setForm({ ...initial })
      // setPhotoFile(null); setPhotoPreview(""); setPhotoUrl("")
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "আপলোড ব্যর্থ",
        text: err.message || "কিছু ভুল হয়েছে।",
        confirmButtonColor: "#047857",
      })
    }
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="w-full bg-[#ebf5f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-700" />
              <span className="select-none">ভর্তি ফর্ম</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-5xl">Holi-Place ভর্তি</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-emerald-800/80">
              শিক্ষার্থীর তথ্য ও ছবি যুক্ত করে ফর্মটি পূরণ করুন।
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="rounded-2xl bg-[#ebf5f3] p-6 shadow-sm ring-1 ring-emerald-100">
            {/* Student info */}
            <h2 className="text-xl font-semibold text-emerald-900">শিক্ষার্থীর তথ্য</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="studentName" className="mb-1 block text-sm font-medium text-emerald-900">
                  শিক্ষার্থীর নাম
                </label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={form.studentName}
                  onChange={onChange}
                  placeholder="পূর্ণ নাম"
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <label htmlFor="dob" className="mb-1 block text-sm font-medium text-emerald-900">
                  জন্মতারিখ
                </label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={onChange}
                  required
                  className="bg-white"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-emerald-900">লিঙ্গ</label>
                <Select value={form.gender} onValueChange={(v) => setForm((s) => ({ ...s, gender: v }))}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">পুরুষ</SelectItem>
                    <SelectItem value="female">মহিলা</SelectItem>
                    <SelectItem value="other">অন্যান্য</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-emerald-900">কোন শ্রেণিতে ভর্তি</label>
                <Select value={form.classApplied} onValueChange={(v) => setForm((s) => ({ ...s, classApplied: v }))}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hifz">হিফজ</SelectItem>
                    <SelectItem value="quran">কোরআন শিক্ষা</SelectItem>
                    <SelectItem value="primary">প্রাইমারি</SelectItem>
                    <SelectItem value="secondary">সেকেন্ডারি</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-emerald-900">রক্তের গ্রুপ</label>
                <Select value={form.bloodGroup} onValueChange={(v) => setForm((s) => ({ ...s, bloodGroup: v }))}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="রক্তের গ্রুপ" />
                  </SelectTrigger>
                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((g) => (
                      <SelectItem value={g} key={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="previousInstitute" className="mb-1 block text-sm font-medium text-emerald-900">
                  পূর্ববর্তী শিক্ষা প্রতিষ্ঠান (ঐচ্ছিক)
                </label>
                <Input
                  id="previousInstitute"
                  name="previousInstitute"
                  value={form.previousInstitute}
                  onChange={onChange}
                  placeholder="প্রতিষ্ঠানের নাম"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Guardian */}
            <h2 className="mt-8 text-xl font-semibold text-emerald-900">অভিভাবকের তথ্য</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="fatherName" className="mb-1 block text-sm font-medium text-emerald-900">
                  পিতার নাম
                </label>
                <Input
                  id="fatherName"
                  name="fatherName"
                  value={form.fatherName}
                  onChange={onChange}
                  placeholder="পিতার নাম"
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="motherName" className="mb-1 block text-sm font-medium text-emerald-900">
                  মাতার নাম
                </label>
                <Input
                  id="motherName"
                  name="motherName"
                  value={form.motherName}
                  onChange={onChange}
                  placeholder="মাতার নাম"
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="guardianPhone" className="mb-1 block text-sm font-medium text-emerald-900">
                  অভিভাবকের ফোন
                </label>
                <Input
                  id="guardianPhone"
                  name="guardianPhone"
                  value={form.guardianPhone}
                  onChange={onChange}
                  placeholder="+8801XXXXXXXXX"
                  required
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-emerald-900">
                  ইমেইল (ঐচ্ছিক)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Address */}
            <h2 className="mt-8 text-xl font-semibold text-emerald-900">ঠিকানা</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="md:col-span-3">
                <label htmlFor="address" className="mb-1 block text-sm font-medium text-emerald-900">
                  ঠিকানা
                </label>
                <Textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={onChange}
                  placeholder="রাস্তা, এলাকা"
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="city" className="mb-1 block text-sm font-medium text-emerald-900">
                  শহর/উপজেলা
                </label>
                <Input
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  placeholder="শহর/উপজেলা"
                  className="bg-white"
                />
              </div>
              <div>
                <label htmlFor="district" className="mb-1 block text-sm font-medium text-emerald-900">
                  জেলা
                </label>
                <Input
                  id="district"
                  name="district"
                  value={form.district}
                  onChange={onChange}
                  placeholder="জেলা"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Photo upload */}
            <h2 className="mt-8 text-xl font-semibold text-emerald-900">শিক্ষার্থীর ছবি</h2>
            <div className="mt-3 grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto]">
              <div>
                <label htmlFor="photo" className="mb-1 block text-sm font-medium text-emerald-900">
                  ছবি (JPG/PNG, সর্বোচ্চ ~5MB)
                </label>
                <div className="flex items-center gap-3">
                  <Input id="photo" type="file" accept="image/*" onChange={onFile} className="bg-white" />
                  <Button
                    type="button"
                    variant="outline"
                    className="border-emerald-300 text-emerald-900 hover:bg-emerald-50 bg-transparent"
                    onClick={async () => {
                      if (!photoFile) {
                        Swal.fire({
                          icon: "info",
                          title: "ছবি নির্বাচন করুন",
                          text: "প্রথমে একটি ছবি ফাইল নির্বাচন করুন।",
                          confirmButtonColor: "#047857",
                        })
                        return
                      }
                      try {
                        Swal.fire({
                          title: "ছবি আপলোড হচ্ছে...",
                          didOpen: () => Swal.showLoading(),
                          allowOutsideClick: false,
                        })
                        const url = await uploadToImgbb(photoFile)
                        setPhotoUrl(url)
                        Swal.fire({
                          icon: "success",
                          title: "ছবি আপলোড সম্পন্ন",
                          text: "আপনার ছবি সফলভাবে আপলোড করা হয়েছে।",
                          confirmButtonColor: "#047857",
                        })
                      } catch (err) {
                        Swal.fire({
                          icon: "error",
                          title: "আপলোড ব্যর্থ",
                          text: err.message || "কিছু ভুল হয়েছে।",
                          confirmButtonColor: "#047857",
                        })
                      }
                    }}
                  >
                    <UploadCloud className="mr-2 h-4 w-4" aria-hidden="true" />
                    আপলোড করুন
                  </Button>
                </div>
                {photoUrl ? (
                  <p className="mt-2 text-sm text-emerald-800/80">
                    আপলোডকৃত ছবি:{" "}
                    <a href={photoUrl} className="underline" target="_blank" rel="noreferrer">
                      লিংক
                    </a>
                  </p>
                ) : null}
              </div>

              <div className="justify-self-start md:justify-self-end">
                <div className="relative h-28 w-28 overflow-hidden rounded-xl ring-1 ring-emerald-100">
                  {photoPreview ? (
                    // Use img for blob preview
                    <img
                      src={photoPreview || "/placeholder.svg"}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-emerald-50 text-xs text-emerald-800/70">
                      Preview
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex items-center justify-end">
              <Button type="submit" className="rounded-xl bg-emerald-700 px-6 text-white hover:bg-emerald-800">
                আবেদন জমা দিন
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
