var camera, scene, renderer, i=2;
			var mesh;

			init();
			animate();
            //loadModel();
            //loadModel2();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
                
			camera.position.y=4;
			camera.position.x=4;
			camera.position.z=4;

				scene = new THREE.Scene();

				cube();
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.setClearColor(0x000000,0);
                document.body.appendChild( renderer.domElement );
				controls = new THREE.OrbitControls(camera,renderer.domElement);
				
				controls.minDistance = 5;
				controls.maxDistance = 10;

				window.addEventListener( 'resize', onWindowResize, false );
                renderer.render(scene, camera);
                
                var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 2 );

                 light.position.set(1,1,1);
   				 scene.add(light);
			}
			function cube() {

				var i, n=0, m=0, h=0, e=3;
				for(f=0;f<=1;f++){
                for(i=0;i<=1;i++){
					var texture = new THREE.TextureLoader().load( 'textures/weerd.jpg' );
					var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );
					if(i!=0){
						h = 1 + m;
					}
					if(f!=0)
					{
						h = 1 + m;
					}
					cube[h] = new THREE.Mesh( geometry, material );
					scene.add( cube[h] );
					console.log("cube = ", h);
					cube[h].position.x = i*e;
					cube[h].position.z = f*e;
					for(n=1;n<=2;n++){
						var texture = new THREE.TextureLoader().load( 'textures/weerd.jpg' );
						var geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
						var material = new THREE.MeshBasicMaterial( { map: texture } );
						m = h + n;
						cube[m] = new THREE.Mesh( geometry, material );
						scene.add( cube[m] );
						console.log("cube = ", m);
							cube[m].position.y = n*e;
							cube[m].position.x = i*e;
							cube[m].position.z = f*e;
							if(n==2){
								scene.remove(cube[m]);
								console.log("cube remove = ", m);
							}
						}
						n--;
					}
				}
		}
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.updateProjectionMatrix();

			}/*
            function loadModel(){
                var loader = new THREE.OBJLoader();
                loader.load('uh/horse 1.obj', function (object){
					object.position.y=200;
					
                    scene.add(object);
                })
            }
            function loadModel2(){
                var loader = new THREE.OBJLoader();
                loader.load('uh/horse 1 copy.obj', function (object){
					object.position.y=-30;
					
                    scene.add(object);
                })
			}*/
			function animate() {
			
				requestAnimationFrame( animate );
				cube[0].rotation.x+=0.005;
				cube[0].rotation.y+=0.01;
				cube[1].rotation.x+=0.005;
				cube[1].rotation.y+=0.01;
				cube[3].rotation.x+=0.005;
				cube[3].rotation.y+=0.01;
				cube[4].rotation.x+=0.005;
				cube[4].rotation.y+=0.01;
				cube[6].rotation.x+=0.005;
				cube[6].rotation.y+=0.01;
				cube[7].rotation.x+=0.005;
				cube[7].rotation.y+=0.01;
				cube[9].rotation.x+=0.005;
				cube[9].rotation.y+=0.01;
				renderer.render( scene, camera );

			}
			$(function()  {
				$("#weerdos").on('click', function(){
					$("#subweerd").slideToggle(500);
				});
			});
