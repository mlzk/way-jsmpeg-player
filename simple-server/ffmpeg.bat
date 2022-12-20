echo off

%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

call ffmpeg -f gdigrab -i desktop -q 0 -f mpegts -codec:v mpeg1video -s 1280x720 -b:v 1500k -codec:a mp2 -ar 44100 -ac 1 -b:a 128k http://127.0.0.1:8890/jsmpeg

@REM ffmpeg -rtsp_transport tcp -i "rtsp://摄像头ip:554/user=admin&password=&channel=1&stream=0.sdp?real_stream" -q 0 -f mpegts -codec:v mpeg1video -s 1000x600 -r 30 http://192.168.0.188:8081/密码


@REM ffmpeg -re -i avatar.mp4  -r 30 -q 0 -f mpegts -codec:v mpeg1video -s 1366x768  http://127.0.0.1:8890/jsmpeg

@REM ffmpeg -re -i avatar.mp4  -r 24 -q 0 -f mpegts -codec:v mpeg1video -s 1280x720  http://127.0.0.1:8890/jsmpeg

@REM ffmpeg -re -i avatar.mp4  -r 90 -q 0 -f mpegts -codec:v mpeg1video -s 1280x720 -b:v 500k -codec:a mp2 -ar 44100 -ac 1 -b:a 128k http://127.0.0.1:8890/jsmpeg

@REM ffmpeg -i avatar.mp4 -f mpegts -codec:v mpeg1video -s 1366x768  http://127.0.0.1:8890/jsmpeg



@REM ffmpeg -re -i avatar.mp4  -r 23.98 -q 0 -f mpegts -codec:v mpeg2video -s 640x360  -an  -bf 0 -maxrate 4000k  http://127.0.0.1:8890/jsmpeg

@REM ffmpeg -y -i  rtmp://ns8.indexforce.com/home/mystream -q 0 -f mpegts -codec:v mpeg1video -s 640x360  -an  -bf 0 -maxrate 4000k  http://127.0.0.1:8890/jsmpeg


