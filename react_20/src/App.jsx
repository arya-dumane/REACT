
import { memo, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );

      setUserData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="bg-black min-h-screen p-4 text-white">

      {/* Images */}
      <div className="grid grid-cols-5 gap-6 p-2">

        {loading ? (
          <h3 className="text-gray-400 text-xs">
            Loading...
          </h3>
        ) : (
          userData.map((e) => (
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
          ))
        )}

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 py-8">

        {/* Previous Button */}
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
          className="bg-amber-400 text-black text-sm rounded px-4 py-2 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {/* Page Number */}
        <h3>
          Page {page}
        </h3>

        {/* Next Button */}
        <button
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
          className="bg-amber-400 text-black text-sm rounded px-4 py-2 cursor-pointer active:scale-95"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default memo(App);
