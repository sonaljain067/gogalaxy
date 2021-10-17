import { useHistory } from 'react-router-dom';
import { useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Main.css';
import Routes from './Routes';
import useInfiniteScroll from "./useInfiniteScroll";
import axios from "axios";

function GetDetailsPage(id){
  <Routes id={id} />
}

const Launches = () => {
  //we change here
  const history = useHistory();
  const [id, setId] = useState(0);
  GetDetailsPage(id);
  const [launches, setLaunches] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //setting tha initial page
  const [page, setPage] = useState(0);
  //we need to know if there is more data
  const [HasMore, setHasMore] = useState(true);

  const [lastElementRef] = useInfiniteScroll(
    HasMore ? loadMoreLaunches : () => {},
    isFetching
  );

  function loadMoreLaunches() {
    setIsFetching(true);

    //using axios to access the third party API
    axios({
      method: "GET",
      url: "https://api.spacexdata.com/v4/launches",
      params: { _page: page, _limit: 16 },
    })
      .then((res) => {
        setLaunches(res.data)
        setHasMore(launches.length > 0);
        setIsFetching(false);
        setPage((prevPageNumber) => prevPageNumber + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //on initial mount
  useEffect(() => {
    loadMoreLaunches();
  }, []);

   

  return (
    <>
        <Paper>
        <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 360 }}>
            <TableHead>
            <TableRow className="Header">
               <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Launchpad</TableCell>
                <TableCell align="center">Window</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {launches.map((row, index) => {
                if (launches.length === index + 1) {
                return (
                    //referencing the last item to be watched by the observer
                    <div ref={lastElementRef} key={row.id}>
                      <>
                      <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="table-row"
                      onClick={() => {setId(row.id); history.push(`/${row.id}`);}}
                      >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.details}</TableCell>
                      <TableCell align="center">{row.launchpad}</TableCell>
                      <TableCell align="center">{row.window}</TableCell>
                      </TableRow>
                      </>
                    </div>
                );
                } else {
                return (<TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className="table-row"
                    onClick={() => {setId(row.id); history.push(`/${row.id}`);}}
                    >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.details}</TableCell>
                    <TableCell align="center">{row.launchpad}</TableCell>
                    <TableCell align="center">{row.window}</TableCell>
                    </TableRow>)
                }
            })}
            {isFetching && <p>Fetching items...</p>}
            </TableBody>
        </Table>
        </TableContainer>
        </Paper>
    </>
  );
};

export default Launches;