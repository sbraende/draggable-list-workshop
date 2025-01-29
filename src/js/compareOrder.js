import stepsForSoftwareProjects from "./stepsData.js";

const compareOrder = () => {
  const listItems = document.querySelectorAll(".list__item");
  const currentOrder = [...listItems].map((item) => {
    return item.textContent.split(".")[1];
  });

  console.log(currentOrder);
  console.log(stepsForSoftwareProjects);

  const isCorrect = currentOrder.every((step, index) => {
    return step === stepsForSoftwareProjects[index];
  });

  currentOrder.forEach((step, index) => {
    if (step === stepsForSoftwareProjects[index]) {
      listItems[index].classList.add("correct");
      listItems[index].classList.remove("incorrect");
    } else {
      listItems[index].classList.remove("correct");
      listItems[index].classList.add("incorrect");
    }
  });
};

export default compareOrder;
