import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import SkillsList from '../Util/Skills.json';
import { Carousel } from '../Carousel/Carousel';

export const Skills = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const createImages = async () => {
      const images = [];
      for (const skill in SkillsList) {
        try {
          images.push({ skill, src: '../../../' + SkillsList[skill] });
        } catch (error) {
          console.error('Error loading image:', error);
        }
      }
      setLoadedImages(images);
    };

    createImages();
  }, []);

  return (
    <Card>
      <Card.Header>
        <h2 className="Header">Skills</h2>
      </Card.Header>
      <Card.Body>
        <Carousel
          items={loadedImages}
        />
      </Card.Body>
    </Card>
  );
};
