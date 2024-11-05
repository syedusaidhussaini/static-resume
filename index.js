function addEducationLine() {
  // Get all current experience entry input fields
  const educationEntries = document.querySelectorAll(".education-entry");
  const maxEntries = 2;

  // Check if we can add more lines
  if (educationEntries.length < maxEntries) {
      // Create a new input element
      const newEducation = document.createElement("input");
      newEducation.type = "text";
      newEducation.placeholder = "Write here";
      newEducation.className = "education-entry";

      // Append the new input element to the experience section
      document.getElementById("edu").appendChild(newEducation);

      // Update the button text to show remaining entries allowed
      const remainingEntries = maxEntries - document.querySelectorAll(".education-entry").length;
      document.getElementById("addEducationButton").innerText = `Add More Education (${remainingEntries} remaining)`;

      // Disable the button if no entries are remaining
      if (remainingEntries === 0) {
          document.getElementById("addEducationButton").disabled = true;
      }
  }
}


function addExperienceLine() {
  // Get all current experience entry input fields
  const experienceEntries = document.querySelectorAll(".experience-entry");
  const maxEntries = 2;

  // Check if we can add more lines
  if (experienceEntries.length < maxEntries) {
      // Create a new input element
      const newExperience = document.createElement("input");
      newExperience.type = "text";
      newExperience.placeholder = "Write here";
      newExperience.className = "experience-entry";

      // Append the new input element to the experience section
      document.getElementById("exp").appendChild(newExperience);

      // Update the button text to show remaining entries allowed
      const remainingEntries = maxEntries - document.querySelectorAll(".experience-entry").length;
      document.getElementById("addExperienceButton").innerText = `Add More Experience (${remainingEntries} remaining)`;

      // Disable the button if no entries are remaining
      if (remainingEntries === 0) {
          document.getElementById("addExperienceButton").disabled = true;
      }
  }
}
function addProjectLine() {
  // Get all current project entry input fields
  const projectEntries = document.querySelectorAll(".project-entry");
  const maxEntries = 2;

  // Check if we can add more lines
  if (projectEntries.length < maxEntries) {
      // Create a new input element
      const newProject = document.createElement("input");
      newProject.type = "text";
      newProject.placeholder = "Write here";
      newProject.className = "project-entry";

      // Append the new input element to the projects section
      document.getElementById("pro").appendChild(newProject);

      // Update the button text to show remaining entries allowed
      const remainingEntries = maxEntries - document.querySelectorAll(".project-entry").length;
      document.getElementById("addProjectButton").innerText = `Add More Projects (${remainingEntries} remaining)`;

      // Disable the button if no entries are remaining
      if (remainingEntries === 0) {
          document.getElementById("addProjectButton").disabled = true;
      }
  }
}
function addSkillLine() {
  // Get all current project entry input fields
  const skillEntries = document.querySelectorAll(".skill-entry");
  const maxEntries = 2;

  // Check if we can add more lines
  if (skillEntries.length < maxEntries) {
      // Create a new input element
      const newSkill = document.createElement("input");
      newSkill.type = "text";
      newSkill.placeholder = "Write here";
      newSkill.className = "skill-entry";

      // Append the new input element to the projects section
      document.getElementById("ski").appendChild(newSkill);

      // Update the button text to show remaining entries allowed
      const remainingEntries = maxEntries - document.querySelectorAll(".skill-entry").length;
      document.getElementById("addSkillButton").innerText = `Add More Skills (${remainingEntries} remaining)`;

      // Disable the button if no entries are remaining
      if (remainingEntries === 0) {
          document.getElementById("addSkillButton").disabled = true;
      }
  }
}

