import React from "react";
import {
  Download,
  Link as LinkIcon,
  BookOpen,
  ArrowRight,
  Mail,
  CheckCircle,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const TrainingSection = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: "Banking Sector Training",
      description:
        "Comprehensive training for banking job aspirants covering products, processes and interview preparation",
      documentLink: "/documents/banking-training.pdf",
      officialLinks: [
        { name: "RBI Careers", url: "https://www.rbi.org.in" },
        { name: "Banking Exam Resources", url: "https://www.ibps.in" },
      ],
    },
    {
      id: 2,
      title: "Finance Sector Certification",
      description:
        "Certification program for finance sector jobs with focus on NBFCs and fintech",
      documentLink: "/documents/finance-certification.pdf",
      officialLinks: [
        { name: "SEBI Guidelines", url: "https://www.sebi.gov.in" },
        { name: "NBFC Directory", url: "https://www.rbi.org.in/nbfc" },
      ],
    },
    {
      id: 3,
      title: "IT for Banking Professionals",
      description:
        "Technology training for banking professionals on core banking solutions and digital platforms",
      documentLink: "/documents/it-banking.pdf",
      officialLinks: [
        { name: "Fintech India", url: "https://www.fintechindia.org" },
        { name: "Digital Banking", url: "https://www.digitalindia.gov.in" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Training Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your skills with our specialized training programs designed
            for banking, finance and IT sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="space-y-4">
                  <a
                    href={program.documentLink}
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Program Brochure
                  </a>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                      <LinkIcon className="w-4 h-4 mr-1" />
                      Official Resources
                    </h4>
                    <ul className="space-y-2">
                      {program.officialLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
                          >
                            <span className="truncate">{link.name}</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="py-16 mt-10 md:mt-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-6">
                    Ready to Join Our Training?
                  </h2>
                  <p className="mb-6 text-blue-100">
                    Complete our training enrollment form to begin your journey
                    towards a successful career.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        Practical industry-oriented training
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        Placement assistance
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        Affordable fees with EMI options
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Training Enrollment
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Fill our simple form to enroll in our training programs
                    </p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://docs.google.com/forms/suji-training-enrollment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                  >
                    Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>

                  <p className="mt-4 text-sm text-gray-500">
                    Opens in a new window
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            New Training Programs Coming Soon
          </h3>
          <p className="text-gray-600 mb-4">
            We're constantly adding new courses based on industry demand
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium inline-flex items-center">
            Notify Me <Mail className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
