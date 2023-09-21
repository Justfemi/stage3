import React, { useState } from 'react';
import data from '../gallery.json';
import './app.css';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useSortable, SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable'; 
import { CSS } from '@dnd-kit/utilities';


const SortableItem = ({image}) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: image.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  
  return (
    <div ref={setNodeRef} 
      className='photo-bag' 
      {...attributes} 
      {...listeners} 
      style={style}
    >
      <div className='photo'>
        <img src={image.image} alt=''/>
      </div>
      <button>{image.tag}</button>
    </div>
  )
}

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState(data);

  function handleDragEnd(e) {
    // console.log('Drag end called', e);
    const {active, over} = e;
    if(active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };
  
  return (
    <>
      <div className='gallery'>
        <div className='input-box'>
          <input 
            type='search' 
            placeholder='Search...'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='photo-container'>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={images}
              strategy={rectSortingStrategy}
            >
            {
              images.filter((image) => {
              if (searchTerm == "") {
                return image;
              } else if (image.tag.toLowerCase().includes(searchTerm.toLowerCase())) {
                return image;
              }
              }).map((image, key) => {
              return (
                <SortableItem key={image.id} image={image} />      
              )
              })
            }
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </>
  )
}

export default Gallery