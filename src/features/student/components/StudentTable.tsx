import React, { Fragment } from 'react';
import { Student } from '../../../models';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';

export interface StudentTableProps {
  studentList: Student[];
  onEdit?: (student: Student) => void;
  onRemove?: (student: Student) => void;
}

const StudentTable = ({ studentList, onEdit, onRemove }: StudentTableProps) => {
  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>City</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {studentList.map((student, idx) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.gender}</TableCell>
                <TableCell>{student.mark}</TableCell>
                <TableCell>{student.city}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onEdit?.(student)}
                    style={{ marginRight: 8 }}
                  >
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => onRemove?.(student)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default StudentTable;
