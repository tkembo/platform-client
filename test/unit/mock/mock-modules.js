angular.module('ushahidi.mock', [])
.factory('$translate', function translateFactory () {
    return ($translate);        
    function $translate (text){ 
        return ({
            then: function (successCallback) {
                successCallback();
            }
        });
    }
})
.service('leafletData', require('./services/third_party/leaflet.js'))

.service('PostEndpoint', require('./services/post.js'))
.service('FormEndpoint', require('./services/form.js'))
.service('FormStageEndpoint', require('./services/form-stages.js'))
.service('TagEndpoint', require('./services/tag.js'))
.service('ConfigEndpoint', require('./services/config.js'))
.service('DataProviderEndpoint', require('./services/data-provider.js'))

.service('Authentication', require('./services/authentication.js'))
.service('Session', require('./services/session.js'))
.service('Maps', require('./services/maps.js'))
.service('Notify', require('./services/notify.js'));
