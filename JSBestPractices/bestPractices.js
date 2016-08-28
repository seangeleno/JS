  var armory = { addSword: function (sword){
                    this.swords = this.swords ? this.swords : [ ];
                    this.swords.push(sword);
                    console.log(this.swords);
                }
              };
  /*
  When used in logical assignment the OR || operator will try to select the first value it encounters that is not "falsy" aka truthy

  Using a logical assignment here will eliminate a read of the sword property.
  */
  var armory2 = { addSword: function (sword) {
                    this.swords = this.swords || [  ];
                    this.swords.push(sword);
                    console.log(this.swords);
                  }
                };

  /************MEMORORIES**********/

  var pocketSTuff = ['Dragon', 'Thing 2', 'Silver Tiger Coin'],
      cluesToThePast = pocketStuff || [];
      getMyIdentity(cluesToThePast);

  function getMyIdentity(memories){
    var identity = (memories.indexOf('Adventure Diary') >= 0) ? 'The One Who Learns' : undefined;
    return 'unknown' || identity;
  }
