import { useState } from "react";



export const Pagination = () => {
    const students = [
        { id: 1, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 2, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 3, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 4, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 5, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 6, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 7, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 8, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 9, firstName: "abc", lastName: "xyz", spi: 10 },
        { id: 10, firstName: "abc", lastName: "xyz", spi: 10 },
    ];

    //   0-5    
    //   5-10

    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 5;
    const totalPage = 2;

    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage>1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const currentData = students.slice(firstIndex, lastIndex);
    return (
        <>
            <div className="d-flex justify-content-center m-5">
                <table >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>SPI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((s) => (
                            <tr>
                                <td>{s.id}</td>
                                <td>{s.firstName}</td>
                                <td>{s.lastName}</td>
                                <td>{s.spi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ul className="pagination d-flex justify-content-center">
                <li className="page-item"><button className="page-link" onClick={prevPage}>Prev</button></li>
                <li className="page-item"><button className="page-link" onClick={() => setCurrentPage(1)}>1</button></li>
                <li className="page-item"><button className="page-link" href="#" onClick={() => setCurrentPage(2)}>2</button></li>
                <li className="page-item"><button className="page-link" onClick={nextPage}>Next </button></li>

            </ul>
        </>
    )
}