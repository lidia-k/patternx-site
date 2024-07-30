"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState } from "react";

function Errors(props: { errors?: string[] }) {
  if (!props.errors?.length) return null;
  return (
    <div className="text-red-500">
      {props.errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
    </div>
  );
}

export default function ConsultingForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<{
    message: String | null;
    errors?: any;
  }>({
    message: null,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError({ message: null });

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/consulting", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          problems: formData.get("problems"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data);
      } else {
        setSuccess(true);
      }
    } catch (error) {
      // Capture the error message to display to the user
      setError({ message: error.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Schedule Your Free Consultation
      </h2>

      {error.message && (
        <div className="bg-red-500 text-white p-4 rounded mb-4">
          {error.message}
        </div>
      )}

      {success ? (
        <div className="bg-green-500 p-6 text-white rounded text-center text-lg">
          <FontAwesomeIcon
            icon={faCheckCircle}
            color="white"
            size="3x"
            className="block mb-4 m-auto"
          />
          Your request has been sent successfully.
          <br />
          We will check and contact you as soon as possible. Thanks!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              name: "name",
              label: "Name",
              type: "text",
              errors: error.errors?.name?._errors,
            },
            {
              name: "company",
              label: "Company",
              type: "text",
              errors: error.errors?.company?._errors,
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              errors: error.errors?.email?._errors,
            },
            {
              name: "phone",
              label: "Phone",
              type: "tel",
              errors: error.errors?.phone?._errors,
            },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
              <Errors errors={field.errors} />
            </div>
          ))}
          <div>
            <label
              htmlFor="problems"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Problems to Discuss
            </label>
            <textarea
              id="problems"
              name="problems"
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            ></textarea>
            <Errors errors={error.errors?.problems?._errors} />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
