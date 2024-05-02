import React from 'react';

const page = () => {
  // Ejemplo de datos de libros
  const highlightedBooks = [
    {
      id: 1,
      title: 'Libro 1',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/aa/99/c6/aa99c6c490025b996118198b07d6d84d.jpg',
    },
    {
      id: 2,
      title: 'Libro 2',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/da/57/29/da5729a0a885583740dd518d56ab27d7.jpg',
    },
    {
      id: 3,
      title: 'Libro 3',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/1b/d7/98/1bd7982d552bf45a315bf93ff7492654.jpg',
    },
    {
      id: 4,
      title: 'Libro 4',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/b2/b1/5e/b2b15e2b5f4125e175726f4b58ac84b4.jpg',
    },
    {
      id: 5,
      title: 'Libro 5',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/ba/9b/74/ba9b7476f629cfbffcca73fb4744f534.jpg',
    },
    // Agrega más libros destacados aquí
  ];

  const recentBooks = [
    {
      id: 1,
      title: 'Libro 1',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/b2/df/e5/b2dfe58f474bae83d7b758e6a1811708.jpg',
    },
    {
      id: 2,
      title: 'Libro 2',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/58/7d/0d/587d0de509730ce26093e7a649d486e8.jpg',
    },
    {
      id: 3,
      title: 'Libro 3',
      author: 'autor desconocido',
      coverImageUrl: 'https://i.pinimg.com/564x/c5/b5/a8/c5b5a8a434b2b8c838163c0939e385fc.jpg',
    },
    // Agrega más libros recientes aquí
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Libros destacados</h2>
        <div className="grid grid-cols-3 gap-4">
          {highlightedBooks.map(book => (
            <div key={book.id} className="bg-white p-4 rounded shadow">
              <img src={book.coverImageUrl} alt={book.title} className="w-full mb-2" />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Libros recientes</h2>
        <div className="grid grid-cols-3 gap-4">
          {recentBooks.map(book => (
            <div key={book.id} className="bg-white p-4 rounded shadow">
              <img src={book.coverImageUrl} alt={book.title} className="w-full mb-2" />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
