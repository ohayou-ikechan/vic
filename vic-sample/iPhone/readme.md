動画から静止画を生成する
ffmpeg -i ../sample02.mp4 -vf fps=fps=10 sample%05d.png
ffmpeg -i ../sample02.mp4 -r 10 -s 350x197 sample%05d.png

ffmpeg -r 10 -i sample%05d.png -r 10 sample02.apng

Gifアニメ作成
ffmpeg -r 10 -i sample%05d.png -r 10 ../iPhone/apng/sample04.gif

ループを一回だけに制限する（imagemagick）
convert ../iPhone/apng/sample06.gif -loop 1 ../iPhone/apng/sample06.gif

imageMagickでpngを圧縮する
convert *.png -resize 20% ./compressed_pngs/output_%04d.png
