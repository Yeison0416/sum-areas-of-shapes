import 'reset-css';
import './index.scss';

import circle from './components/cirlce/cirlce';
import square from './components/square/square';
import cubo from './components/cubo/cubo';
import areaCalculator from './services/area-calculator/area-calculator';
import volumeCalculator from './services/volume-calculator/volume-calculator';
import outPutter from './components/out-putter/out-putter';

function app() {
    const flatShapes = [circle(5), square(3), cubo(2)];
    const sumAreas = areaCalculator(flatShapes);
    const areaOutPut = outPutter(sumAreas);

    const solidShapes = [cubo(2), cubo(3), cubo(4)];
    const sumVolumes = volumeCalculator(solidShapes);
    const volumOutPut = outPutter(sumVolumes);

    const divElement = document.createElement('div');
    const spanAreaElement = document.createElement('span');
    const spanVolumeElement = document.createElement('span');

    spanAreaElement.innerHTML = 'Areas' + areaOutPut.HTML() + areaOutPut.JSON();
    spanVolumeElement.innerHTML = 'Volumes' + volumOutPut.HTML() + volumOutPut.JSON();

    divElement.appendChild(spanAreaElement);
    divElement.appendChild(spanVolumeElement);

    return divElement;
}

document.body.appendChild(app());
