import { memo, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (e) {
      return (
        <div key={e.id}>
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                src={e.download_url}
                alt={e.author}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="font-bold text-lg mt-2">
              {e.author}
            </h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen p-4 text-white">

      {/* Images / Cards */}
      <div className="grid grid-cols-5 gap-6 p-2">
        {printUserData}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 py-8">

        <button
          style={{ opacity: page === 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2"
          onClick={() => {
            if (page > 1) {
              setUserData([]);
              setPage(page - 1);
            }
          }}
        >
          Prev
        </button>

        <h3>
          Page {page}
        </h3>

        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2"
          onClick={() => {
            setUserData([]);
            setPage(page + 1);
          }}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default memo(App);