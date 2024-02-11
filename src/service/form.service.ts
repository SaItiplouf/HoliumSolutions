export const handleChange = (formData: any, setFormData: any) => (e: any) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const handleKeyDown = (e: any) => {
  if (e.key === "Enter") {
    const form = e.target.form;
    const index = Array.prototype.indexOf.call(form, e.target);
    form.elements[index + 1].focus();
    e.preventDefault();
  }
};
