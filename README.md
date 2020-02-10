# Frida iOS App Patching

This technique patches an IPA to perform an action using Frida without requiring to attach a debugger and execute Frida scripts in the background during runtime.

```mkdir -p Payload/DamnVulnerableIOSApp.app/Frameworks/

nano Payload/DamnVulnerableIOSApp.app/Frameworks/FridaGadget.config

nano Payload/DVIA-v2.app/Frameworks/script.js

zip -r DamnVulnerableIOSApp.ipa "Payload/DamnVulnerableIOSApp.app/Frameworks/"

security find-identity -p codesigning -v

objection patchipa --source DamnVulnerableiOSApp.ipa --codesign-signature XXXXXXXXXX

unzip DamnVulnerableiOSApp-frida-codesigned.ipa

ios-deploy -W -b Payload/DamnVulnerableIOSApp.app
```
