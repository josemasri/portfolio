import { FunctionComponent } from "react";
import { Contact as ContactLabels } from "../../types/labels-res";

interface Props {
  labels: ContactLabels;
}

export const Contact: FunctionComponent<Props> = ({ labels }) => {
  return (
    <section className="flex flex-col justify-between rounded-lg p-4">
      <h4 className="text-xl font-bold mb-4">{labels.title}</h4>
      <form>
        <div className="p-0.5 mb-2 transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r shadow shadow-pink-500 from-blue-800 via-blue-500 to-pink-600">
          <input
            type="text"
            className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-lg p-2 w-full"
            placeholder={labels.name}
          />
        </div>
        <div className="p-0.5 mb-2 transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r shadow shadow-pink-500 from-blue-800 via-blue-500 to-pink-600">
          <input
            type="text"
            className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-lg p-2 w-full"
            placeholder={labels.email}
          />
        </div>
        <div className="p-0.5 mb-2 transform hover:scale-[1.01] transition-all rounded-xl bg-gradient-to-r shadow shadow-pink-500 from-blue-800 via-blue-500 to-pink-600">
          <textarea
            className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-lg p-2 w-full"
            placeholder={labels.message}
          />
        </div>
        <button
          type="submit"
          className="mt-2 text-white font-semibold bg-gradient-to-r from-green-300 via-green-500 to-green-800 py-1 px-2 w-full shadow-lg shadow-green-500 rounded-full"
        >
          {labels.send}
        </button>
      </form>
    </section>
  );
};
