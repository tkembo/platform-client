module.exports = [
    '$http',
    'Util',
    'ModalService',
    'Session',
    'TermsOfServiceEndpoint',
    'CONST',
    '$rootScope',
    '$q',
    'Notify',

function (
    $http,
    Util,
    ModalService,
    Session,
    TermsOfServiceEndpoint,
    CONST,
    $rootScope,
    $q,
    Notify
) {
    var tosCheck = function (tosEntry) {
        var deferred = $q.defer();
        var showTos = false;
        //if the tos agreement date is after the to the release date, then resolve
        if(tosEntry.results.length && tosEntry.results[0].agreement_date >= CONST.TOS_RELEASE_DATE) {
            deferred.resolve();
        //Otherwise (the tos agreement is before the release date or the user has never signed)
        //We need to show the ToS modal 
        } else {
            showTos = true;
        }

        if (showTos){
            Notify.confirmTos().then(function(){
                deferred.resolve();
            }, function(){
                deferred.reject();
            });
        }   
        return deferred.promise;
    };

    return {

        getTosEntry: function (){
            return TermsOfServiceEndpoint.get()
            .$promise.then(function (tosEntry) {
                return tosCheck(tosEntry);
            });
        }
    };

}];

