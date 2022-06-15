import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from '../../../utils/axios';
import Page from '../../pages/Page';
import { Results, Header, TopBar } from './components';
import Config from "../../../Config"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  results: {
    marginTop: theme.spacing(3)
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  },
  link: {
    display: 'flex',
    cursor: 'pointer'
  },
  dates: {},
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  },
  topBar: {
    zIndex: 2,
    // position: 'relative'
  },
  header: {
    marginTop: theme.spacing(10)

  }
}));

const CourseList = () => {
  const classes = useStyles();

  const [courses, setCourses] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  const onClose = () => {
    setSelectedCustomers([]);
  };

  useEffect(() => {
    let mounted = true;

    const getAllCourses = () => {
      axios.get(`${Config.hostName}/course`, { headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTM2OTg2MjZlNDBhODMwMDNjMGRjMSIsIm5hbWUiOiJTeWVkIEFiZHVsIiwiZW1haWwiOiJzeWVkLmFiZHVsQG51dGFuaXguY29tIiwiYXBpS2V5IjoiNDRkMTRlNzAtMjA5MC0xMWVjLWI1ZWQtNDllMWFhZmY0NjIzIiwiaWF0IjoxNjQ4MjA0MTExLCJleHAiOjE2Nzk3NjE3MTF9.u86d-PFIyZAner8UrWc7tyy-ueUG0GyH7s8TZkGQvMA"
      }}).then((response) => {
        if (mounted) {
          setCourses(response.data.data);
        }
      });
    };

    getAllCourses();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page className={classes.root} title="Manage Courses">
       <TopBar 
        className={classes.topBar}
      />
      <Header className={classes.header}/>

      {courses && (
        <Results
          className={classes.results}
          courses={courses}
          handleFilterClose={handleFilterClose}
          handleFilterOpen={handleFilterOpen}
          onClose={onClose}
          openFilter={openFilter}
          selectedCustomers={selectedCustomers}
        />
      )}
    </Page>
  );
};

export default CourseList;
