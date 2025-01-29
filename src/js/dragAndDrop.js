import updatedIndices from "./updateIndices.js";

const handleDragAndDrop = () => {
  const list = document.querySelector(".list");
  let draggedItem = null;

  // were using eventDelegation to attach event listeners to LIs.
  list.addEventListener("dragstart", (e) => {
    if (e.target && e.target.tagName === "LI") {
      draggedItem = e.target;
      draggedItem.classList.add("list__item--dragged");
    }
  });

  list.addEventListener("dragend", () => {
    if (draggedItem) {
      draggedItem.classList.remove("list__item--dragged");
      draggedItem = null;
      updatedIndices();
    }
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", (e) => {
    e.preventDefault(); // Disable default behavor, run only our code.

    // If any reciver exists
    if (e.target && e.target.tagName === "LI" && draggedItem !== e.target) {
      const items = Array.from(list.children); // Generates an array from all the childeren of the list (ol)
      const targetIndex = items.indexOf(e.target);
      const draggedIndex = items.indexOf(draggedItem);
      console.log(items);
      console.log(targetIndex);

      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, e.target.nextSibling);
      } else {
        list.insertBefore(draggedItem, e.target);
      }
    }
  });
};

export default handleDragAndDrop;
