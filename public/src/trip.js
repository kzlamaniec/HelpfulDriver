var UID = sessionStorage.getItem('uid');

const tripsRef = usersRef.doc(`${UID}`).collection('Trips');

  function add_trip_and_search(){

    var vv_from = document.getElementById("fromId").value;
    var vv_destination = document.getElementById("destinationId").value;
    var vd_when = document.getElementById("dateId").value;
    var by_car = document.getElementById("inlineRadio1");
    var on_foot = document.getElementById("inlineRadio2");
    var vv_how;

    if (by_car.checked){
        vv_how = 'by car';
    }else{  
        vv_how = 'on foot';
    }
    tripsRef
    .add({
        from: vv_from,
        to: vv_destination,
        when: firebase.firestore.Timestamp.fromDate(new Date(vd_when)),
        how: vv_how,
    
    })
    .then((docRef) => {
        console.log(UID);
        console.log("Trip successfully added!", docRef.id);

        usersRef
        .doc(`${UID}`)
        .update({
            trip: firebase.firestore.FieldValue.arrayUnion(firebase.firestore().doc(`Trips/${docRef.id}`))
        })
        .then(() => {
            console.log("User updated!", UID);
            window.location.assign('../4_companions/index.html');
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error adding document: ", error);
    });
  }

function add_trip_and_go_home(){

    var vv_from = document.getElementById("fromId").value;
    var vv_destination = document.getElementById("destinationId").value;
    var vd_when = document.getElementById("dateId").value;
    var by_car = document.getElementById("inlineRadio1");
    var on_foot = document.getElementById("inlineRadio2");
    var vv_how;

    if (by_car.checked){
        vv_how = 'by car';
    }else{  
        vv_how = 'on foot';
    }
    tripsRef
    .add({
        from: vv_from,
        to: vv_destination,
        when: firebase.firestore.Timestamp.fromDate(new Date(vd_when)),
        how: vv_how,
    
    })
    .then((docRef) => {
        console.log(UID);
        console.log("Trip successfully added!", docRef.id);

        usersRef
        .doc(`${UID}`)
        .update({
            trip: firebase.firestore.FieldValue.arrayUnion(firebase.firestore().doc(`Trips/${docRef.id}`))
        })
        .then(() => {
            console.log("User updated!", UID);
            window.location.assign('../2_main/index.html');
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error adding document: ", error);
    });
  }