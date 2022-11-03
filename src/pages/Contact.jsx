import { useState } from "react";

const initialState = {
  firstname: false,
  lastname: false,
  email: false,
};

export function Contact() {
  const [name] = useState("Lawrdev");
  const [mssgError, setMssgError] = useState(false);
  const [helperText, setHelperText] = useState(initialState);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "", // TODO: join on submit
    email: "",
    message: "",
    agree: false,
  });

  const { message } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    // show&hide helper text
    if (e.target.value) {
      setHelperText(() => ({
        ...initialState,
        [e.target.id]: true,
      }));
    } else {
      setHelperText(initialState);
    }

    // hide message error
    if (message) {
      setMssgError(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      setMssgError(true);
      return;
    }
  };

  return (
    <>
      <section className="my-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl sm:text-4xl font-semibold sm:tracking-tight text-gray-900">
              Contact Me
            </h2>
            <p className="text-lg sm:text-xl font-normal text-gray-600">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>

          {/* form */}
          <div>
            <form onSubmit={onSubmit} autoComplete="off">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-grow flex flex-col">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium text-gray-700 mb-1.5"
                  >
                    First name
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name"
                      className="input-item"
                      onChange={handleChange}
                    />
                    {helperText.firstname && (
                      <p className="absolute -bottom-1 left-0 translate-y-full text-sm text-gray-600">
                        This is a hint text to help the user
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-grow flex flex-col">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Last name
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your last name"
                      className="input-item"
                      onChange={handleChange}
                    />
                    {helperText.lastname && (
                      <p className="absolute -bottom-1 left-0 translate-y-full text-sm text-gray-600">
                        This is a hint text to help the user
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yourname@email.com"
                    className="input-item"
                    onChange={handleChange}
                  />
                  {helperText.email && (
                    <p className="absolute -bottom-1 left-0 translate-y-full text-sm text-gray-600">
                      This is a hint text to help the user
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    className={
                      mssgError ? "input-item mssg-error" : "input-item"
                    }
                    rows="4"
                    onChange={handleChange}
                  ></textarea>
                  {mssgError && (
                    <p className="mb-1.5 text-sm" style={{ color: "#F83F23" }}>
                      Please enter a message
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-8 flex items-start gap-3">
                <label htmlFor="agree">
                  <input
                    required
                    type="checkbox"
                    id="agree"
                    name="checkbox"
                    className="checkbox"
                  />
                  <span></span>
                </label>

                <p className="text-base font-normal text-gray-600">
                  You agree to providing your data to {name} who may contact
                  you.
                </p>
              </div>

              <div>
                <button type="submit" className="form_btn">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
