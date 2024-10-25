import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface JobOpening {
  title: string;
  experience: string;
  location: string;
  description: string;
  roles: string[];
  positions: string[];
}

const jobOpeningsData: JobOpening[] = [
  {
    title: "Cyber Security Consultant",
    experience: "2-5 years",
    location: "Noida UP, Onsite",
    description:
      "We are seeking skilled Cyber Security Consultants to join our team and help protect our clients' digital assets.",
    roles: ["Junior Consultant", "Senior Consultant", "Team Lead"],
    positions: ["Full-time", "Part-time", "Contract"],
  },
  {
    title: "VAPT Tester",
    experience: "3-6 years",
    location: "Noida UP, Onsite",
    description:
      "Join our VAPT team to conduct thorough vulnerability assessments and penetration testing for our clients.",
    roles: ["Junior Tester", "Senior Tester", "VAPT Lead"],
    positions: ["Full-time", "Contract"],
  },
  {
    title: "Embedded Security Specialist",
    experience: "4-7 years",
    location: "Noida UP, Onsite",
    description:
      "We're looking for an Embedded Security Specialist to secure IoT and embedded systems for our clients.",
    roles: ["Security Engineer", "Senior Security Engineer", "Technical Lead"],
    positions: ["Full-time"],
  },
  {
    title: "Threat Intelligence Analyst",
    experience: "2-4 years",
    location: "Noida UP, Onsite",
    description:
      "Join our Threat Intelligence team to analyze and respond to emerging cyber threats and vulnerabilities.",
    roles: ["Junior Analyst", "Senior Analyst", "Team Coordinator"],
    positions: ["Full-time", "Part-time"],
  },
  {
    title: "Security Operations Center (SOC) Analyst",
    experience: "1-3 years",
    location: "Noida UP, Onsite",
    description:
      "We're seeking SOC Analysts to monitor, detect, and respond to security incidents in real-time.",
    roles: ["L1 Analyst", "L2 Analyst", "SOC Team Lead"],
    positions: ["Full-time", "Shift-based"],
  },
  {
    title: "Cloud Security Architect",
    experience: "5-8 years",
    location: "Noida UP, Onsite",
    description:
      "Design and implement secure cloud infrastructure and solutions for our enterprise clients.",
    roles: ["Cloud Security Engineer", "Senior Cloud Security Architect"],
    positions: ["Full-time", "Contract"],
  },
];

const JobCard: React.FC<{ job: JobOpening; onApply: () => void }> = ({
  job,
  onApply,
}) => (
  <motion.div
    className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 ">{job.title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <FaClock className="mr-2" />
        <span>{job.experience} experience</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>{job.location}</span>
      </div>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <button
        className="bg-primary text-secondary py-2 px-4 rounded hover:bg-primary/70 transition duration-300"
        onClick={onApply}
      >
        Apply Now
      </button>
    </div>
  </motion.div>
);

const ApplyPopup: React.FC<{ job: JobOpening; onClose: () => void }> = ({
  job,
  onClose,
}) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleRoleChange = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handlePositionChange = (position: string) => {
    setSelectedPositions((prev) =>
      prev.includes(position)
        ? prev.filter((p) => p !== position)
        : [...prev, position]
    );
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    if (!selectedRoles || !selectedPositions || !resume) {
      setError("Please select a role, position, and upload your resume.");
      return;
    }
    console.log("Applying for:", job.title);
    console.log("Selected roles:", selectedRoles);
    console.log("Selected positions:", selectedPositions);
    console.log("Resume:", resume);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-secondary rounded-lg p-8 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">
          Apply for <span className="text-primary">{job.title}</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Roles:</h3>
            {job.roles.map((role) => (
              <label key={role} className="block mb-2">
                <input
                  type="checkbox"
                  name="role"
                  value={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                  className="mr-2"
                />
                {role}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Select Positions:</h3>
            {job.positions.map((position) => (
              <label key={position} className="block mb-2">
                <input
                  type="checkbox"
                  name="position"
                  value={position}
                  checked={selectedPositions.includes(position)}
                  onChange={() => handlePositionChange(position)}
                  className="mr-2"
                />
                {position}
              </label>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Upload Resume:</h3>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png"
              onChange={handleResumeChange}
              className="w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-secondary rounded hover:bg-secondary/80 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-secondary rounded hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-primary">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600">
            We are looking for energetic candidates with 2-5 years of relevant
            experience in the following areas:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobOpeningsData.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onApply={() => setSelectedJob(job)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedJob && (
            <ApplyPopup
              job={selectedJob}
              onClose={() => setSelectedJob(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Jobs;
