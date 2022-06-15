import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Menu,
  MenuItem,
  ListItemText
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  },
  filterActions: {
    display: 'flex',
    alignItems: 'center'
  },
}));




const Results = props => {
  const { className, courses, selectedCustomers, onClose, handleFilterClose, handleFilter, openFilter, ...rest } = props;
  const classes = useStyles();
  const sortRef = useRef(null);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most popular');
  const [mode, setMode] = useState('grid');


  const handleSortOpen = () => {
    setOpenSort(true);
  };

  const handleSortClose = () => {
    setOpenSort(false);
  };

  const handleSortSelect = value => {
    setSelectedSort(value);
    setOpenSort(false);
  };

  const handleModeChange = (event, value) => {
    setMode(value);
  };


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <Card>

        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.filterActions}>
              <Button
                className={classes.sortButton}
                onClick={handleSortOpen}
                ref={sortRef}
              >
                {selectedSort}
                <ArrowDropDownIcon />
              </Button>
              <ToggleButtonGroup
                exclusive
                onChange={handleModeChange}
                size="small"
                value={mode}
              >
                <ToggleButton value="grid">
                  <ViewModuleIcon />
                </ToggleButton>
              </ToggleButtonGroup>
              <Menu
        anchorEl={sortRef.current}
        className={classes.menu}
        onClose={handleSortClose}
        open={openSort}
      >
        {['Most recent', 'Popular', 'Price high', 'Price low', 'On sale'].map(
          option => (
            <MenuItem
              className={classes.menuItem}
              key={option}
              onClick={() => handleSortSelect(option)}
            >
              <ListItemText primary={option} />
            </MenuItem>
          )
        )}
      </Menu>
            </div>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === courses.length}
                        color="primary"
                        indeterminate={
                          selectedCustomers.length > 0 &&
                          selectedCustomers.length < courses.length
                        }
                        // onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Lab Code</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courses.map(customer => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.docketNo) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={
                            selectedCustomers.indexOf(customer.docketNo) !== -1
                          }
                          color="primary"
                          // onChange={event =>
                          //   handleSelectOne(event, customer.docketNo)
                          // }
                          value={selectedCustomers.indexOf(customer.docketNo) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <div>
                            {customer._id}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.labCode}</TableCell>
                      <TableCell>
                        {customer.labDuration}
                      </TableCell>
                      <TableCell>{customer.labName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>

      </Card>

    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
  handleFilter: PropTypes.func,
  handleFilterClose: PropTypes.func,
  getDocketsToCreateManifest: PropTypes.func,
  // handleSelectAll: PropTypes.func,
  // handleSelectOne: PropTypes.func,
  onClose: PropTypes.func,
  openFilter: PropTypes.bool.isRequired,
  selectedCustomers: PropTypes.array.isRequired,
};

Results.defaultProps = {
  customers: []
};

export default Results;
