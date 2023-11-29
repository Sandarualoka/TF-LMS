

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

const Category = () => {
  const [modules, setModules] = useState([
    
    // Add more modules as needed
  ]);

  const [open, setOpen] = useState(false);
  const [newModule, setNewModule] = useState({ title: '', description: '' });

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [moduleToDelete, setModuleToDelete] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewModule((prevModule) => ({ ...prevModule, [name]: value }));
  };

  const addNewModule = () => {
    const module = {
      id: modules.length + 1,
      title: newModule.title,
      description: newModule.description,
    };

    setModules([...modules, module]);
    setNewModule({ title: '', description: '' });
    handleClose();
  };

  const handleDeleteConfirmationOpen = (moduleId) => {
    setDeleteConfirmationOpen(true);
    setModuleToDelete(moduleId);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
    setModuleToDelete(null);
  };

  const deleteModule = () => {
    const updatedModules = modules.filter((module) => module.id !== moduleToDelete);
    setModules(updatedModules);
    handleDeleteConfirmationClose();
  };

  return (
    <div className='container mt-4'>
      <div className="mt-3 text-center wow fadeInUp">
        <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
        <h1 className="mb-5">Our Modules</h1>
      </div>
      <div className='row mb-4'>
        {modules.map((module) => (
          <div key={module.id} className="col-md-4 mb-4">
            <Card className="text-white bg-primary">
              <CardContent>
                <Typography variant="h5" component="div">
                  {module.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {module.description}
                </Typography>
                <Button
                  onClick={() => handleDeleteConfirmationOpen(module.id)}
                  style={{ backgroundColor: 'red', borderColor: 'red' }}
                  className="btn mt-2"
                >
                  Delete Module
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}

        <div className="col-md-4 mb-4">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add New Module
          </Button>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Module</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Module Name"
            type="text"
            fullWidth
            name="title"
            value={newModule.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Module Description"
            type="text"
            fullWidth
            name="description"
            value={newModule.description}
            onChange={handleInputChange}
          />
          <Button onClick={addNewModule} color="primary">
            Add Module
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={handleDeleteConfirmationClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this module?
          </Typography>
          <Button onClick={deleteModule} color="secondary">
            Yes
          </Button>
          <Button onClick={handleDeleteConfirmationClose} color="primary">
            No
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Category;
