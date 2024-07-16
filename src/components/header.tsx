const Header = () => {
  return (
    <div className="flex flex-col gap-4 w-auto p-8 bg-slate-100 items-center justify-center">
      <h1 className="text-3xl">Javascript/React State Management</h1>
      <h3 className="text-xl">Module 6 - Guide 6</h3>
      <p className="w-3/5">
        This project uses Redux for state management. I've made two slices:
        counterSlice and toDoSlice that I import into the store. The to do list
        does not store anywhere but it should not be complicated to add these
        to-do items into a database or store inside the local storage. However
        since this is for demonstrating purposes I've decided to leave that out.
      </p>
      <div>
        <h3>Tools used for the project:</h3>
        <ul className="mt-4 list-disc">
          <li>Vite + React for package bundling and front end framework</li>
          <li>GitHub for project hosting</li>
          <li>Tailwind for layout and styling</li>
          <li>Redux for state management</li>
          <li>gh-pages for deployment</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
