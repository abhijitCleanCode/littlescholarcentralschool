import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AdmissionForm() {
  const initialState = {
    studentName: "",
    rollNo: "",
    dateOfBirth: "",
    placeOfBirth: "",
    fatherInfo: "",
    motherInfo: "",
    guardianInfo: "",
    correspondenceAddress: "",
    permanentAddress: "",
    annualIncome: "",
    siblingInfo: "",
    community: "",
    religion: "",
    nationality: "",
    isHandicapped: "",
    lastSchool: "",
    phoneNumber: "",
    lastClassStudied: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5snwhdj",
        "template_lelqf0i",
        formData,
        "OnKjb4bLI3Zlk_JNT"
      )
      .then(
        () => {
          alert("Admission form submitted successfully!");
          setFormData(initialState);
        },
        () => {
          alert("Failed to submit the form. Please try again.");
        }
      );
  };

  const updateField = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 bg-white shadow-md rounded-lg md:ml-[25rem]">
      <h1 className="text-3xl font-bold text-center mb-8 mt-20">Admission Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Student Name</label>
            <input
              type="text"
              value={formData.studentName}
              onChange={updateField("studentName")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Roll No</label>
            <input
              type="text"
              value={formData.rollNo}
              onChange={updateField("rollNo")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={updateField("dateOfBirth")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Place of Birth</label>
            <input
              type="text"
              value={formData.placeOfBirth}
              onChange={updateField("placeOfBirth")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Father's Name & Qualification</label>
            <input
              type="text"
              value={formData.fatherInfo}
              onChange={updateField("fatherInfo")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mother's Name & Qualification</label>
            <input
              type="text"
              value={formData.motherInfo}
              onChange={updateField("motherInfo")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Guardian's Info</label>
            <input
              type="text"
              value={formData.guardianInfo}
              onChange={updateField("guardianInfo")}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Annual Income</label>
            <input
              type="text"
              value={formData.annualIncome}
              onChange={updateField("annualIncome")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Correspondence Address</label>
            <input
              type="text"
              value={formData.correspondenceAddress}
              onChange={updateField("correspondenceAddress")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Permanent Address</label>
            <input
              type="text"
              value={formData.permanentAddress}
              onChange={updateField("permanentAddress")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Sibling Info</label>
            <input
              type="text"
              value={formData.siblingInfo}
              onChange={updateField("siblingInfo")}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Community</label>
            <input
              type="text"
              value={formData.community}
              onChange={updateField("community")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Religion</label>
            <input
              type="text"
              value={formData.religion}
              onChange={updateField("religion")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Nationality</label>
            <input
              type="text"
              value={formData.nationality}
              onChange={updateField("nationality")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Handicapped (Yes/No)</label>
            <input
              type="text"
              value={formData.isHandicapped}
              onChange={updateField("isHandicapped")}
              className="w-full border px-4 py-2 rounded"
              placeholder="Yes / No"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last School Attended</label>
            <input
              type="text"
              value={formData.lastSchool}
              onChange={updateField("lastSchool")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Class Studied</label>
            <input
              type="text"
              value={formData.lastClassStudied}
              onChange={updateField("lastClassStudied")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              value={formData.phoneNumber}
              onChange={updateField("phoneNumber")}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow mb-10"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
