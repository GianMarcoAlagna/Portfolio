import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import SkillsList from '../Util/Skills.json';

export const Skills = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (const skill in SkillsList) {
        try {
          const imagePath = '../../../' + SkillsList[skill];
          const imgModule = await import(imagePath);
          images.push({ skill, src: imgModule.default });
        } catch (error) {
          console.error('Error loading image:', error);
        }
      }
      setLoadedImages(images);
    };

    importImages();
  }, []);

  return (
    <Card>
      <Card.Header>
        <h2 className="Header">Skills</h2>
      </Card.Header>
      <Card.Body>
        <ul className='Grid__list'>
          {loadedImages.map(({ skill, src }) => (
            <li className="Grid__list-item" key={skill}>
              <img src={src} alt={skill} />
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};
