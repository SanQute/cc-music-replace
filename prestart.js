ig.module('game.feature.loadable-replace')
  .requires("impact.base.loader", "impact.feature.bgm.bgm", "game.feature.bgm.playlist")
  .defines(function () {

    ig.Bgm.inject({

      onLevelLoadStart(a) {
        console.log(a);
        this.clearResumeOnChange();
        if (a.attributes && a.attributes.bgm) {
          this.mapDefaultTrackSet && this.mapDefaultTrackSet.clearCached();
          console.log(a);
          this.mapDefaultTrackSet = this.loadTrackSet(a.attributes.bgm);
          if (a.name == "autumn/path-1-3") {
            a.entities[284].settings.event[19] = {
              "bgm": "bluehedgeheg",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name == "jungle/caves/infested-cave-02") {
            a.entities[173].settings.event[29] = {
              "bgm": "sephisloth",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          if (a.name == "arid/tower-1") {
            a.entities[242].settings.event[31] = {
              "bgm": "stealth",
              "volume": 1,
              "mode": "IMMEDIATELY",
              "type": "PUSH_BGM"
            }
          }
          this.setDefault(this.mapDefaultTrackSet, null, true);
        }
      }

    })
  })