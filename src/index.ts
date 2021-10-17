/**
 * hello-world component for A-Frame.
 */
import { Coordinate, registerComponent } from 'aframe';
import { MeshBasicMaterial, Mesh } from 'three';

registerComponent('hello-world', {
    schema: {
        rotationSpeed: {
            default: 2
        }
    },

    init: function () {
      console.log("Hello world!");
      const mesh = this.el.getObject3D('mesh') as Mesh;
      mesh.material = new MeshBasicMaterial( { color: 0x00ff00 } )
      ;
    },

    update: function (oldData) {
    },

    remove: function () {
    },

    tick: function (time: number, timeDelta: number) {
        const rotation: Coordinate = this.el!.getAttribute('rotation');
        const newRotation = {...rotation};
        newRotation.x += this.data.rotationSpeed;
        newRotation.z += this.data.rotationSpeed;
        this.el!.setAttribute('rotation', newRotation);
    },

    pause: function () {
    },

    play: function () {
    }
});

