var hook = ObjC.classes["JailbreakDetectionVC"]["- isJailbroken"];
Interceptor.attach(hook.implementation, {
  onLeave: function(retval) {
    retval.replace(ptr("0x0"))
    console.log("Jailbreak Test 1 Bypassed")
  }
});
