// import { Group, Text } from "@mantine/core";
// import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
// import { Dropzone, DropzoneProps, MIME_TYPES } from "@mantine/dropzone";

// const DropZone = (props: Partial<DropzoneProps>) => {
//   return (
//     <Dropzone
//       onDrop={(files) => console.log("accepted files", files)}
//       onReject={(files) => console.log("rejected files", files)}
//       maxSize={5 * 1024 ** 2}
//       accept={[MIME_TYPES.doc, MIME_TYPES.pdf, MIME_TYPES.docx]}
//       {...props}
//       className="cursor-pointer"
//       style={{
//         border: "1px solid #3d3d3d",
//       }}
//     >
//       <Group
//         justify="center"
//         gap="xl"
//         mih={220}
//         style={{ pointerEvents: "none" }}
//       >
//         <Dropzone.Accept>
//           <IconUpload
//             size={52}
//             color="var(--mantine-color-blue-6)"
//             stroke={1.5}
//           />
//         </Dropzone.Accept>
//         <Dropzone.Reject>
//           <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
//         </Dropzone.Reject>
//         <Dropzone.Idle>
//           <IconPhoto
//             size={52}
//             color="var(--mantine-color-dimmed)"
//             stroke={1.5}
//           />
//         </Dropzone.Idle>

//         <div>
//           <Text size="xl" inline>
//             Drag Resume here or click to select files
//           </Text>
//           <Text size="sm" c="dimmed" inline mt={7}>
//             Attach as many files as you like, each file should not exceed 5mb
//           </Text>
//         </div>
//       </Group>
//     </Dropzone>
//   );
// };

// export default DropZone;

// The below component is nicles working that includes dropzone

// import { useState } from "react";
// import {
//   Group,
//   Text,
//   Button,
//   Progress,
//   Paper,
//   Notification,
//   Stack,
// } from "@mantine/core";
// import { IconUpload, IconPhoto, IconX, IconTrash } from "@tabler/icons-react";
// import {
//   Dropzone,
//   DropzoneProps,
//   FileRejection,
//   MIME_TYPES,
// } from "@mantine/dropzone";

// const DropZone = (props: Partial<DropzoneProps>) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploadProgress, setUploadProgress] = useState<number>(0);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [showNotification, setShowNotification] = useState<boolean>(false);

//   const handleDrop = (acceptedFiles: File[]) => {
//     if (acceptedFiles.length > 0) {
//       setFile(acceptedFiles[0]);
//       simulateUpload();
//       setErrorMessage(null);
//       setShowNotification(false);
//     }
//   };

//   const handleReject = (fileRejections: FileRejection[]) => {
//     const errors = fileRejections.map((rejection) => {
//       return `${rejection.file.name}: ${rejection.errors
//         .map((e) => e.message)
//         .join(", ")}`;
//     });

//     setErrorMessage(errors.join("\n"));
//     setShowNotification(true);
//   };

//   const removeFile = () => {
//     setFile(null);
//     setUploadProgress(0);
//   };

//   const simulateUpload = () => {
//     setUploadProgress(0);
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 3 + 1; // Increase by a random value between 1-3 for smoothness
//       setUploadProgress(progress);

//       if (progress >= 100) {
//         clearInterval(interval);
//         setUploadProgress(100); // Ensure it ends at exactly 100%
//       }
//     }, 50); // More frequent updates for smooth animation
//   };

//   return (
//     <div>
//       {/* Error Notification */}
//       {showNotification && errorMessage && (
//         <Notification
//           icon={<IconX size={20} />}
//           color="red"
//           title="Error"
//           onClose={() => setShowNotification(false)}
//         >
//           {errorMessage}
//         </Notification>
//       )}
//       <Dropzone
//         onDrop={handleDrop}
//         onReject={handleReject}
//         {...props}
//         maxSize={5 * 1024 ** 2}
//         accept={[MIME_TYPES.doc, MIME_TYPES.pdf, MIME_TYPES.docx]}
//         multiple={false}
//         {...props}
//         className="cursor-pointer"
//         style={{
//           border: "1px solid #3d3d3d",
//           borderRadius: "8px",
//           padding: "20px",
//         }}
//       >
//         <Group
//           justify="center"
//           gap="xl"
//           mih={220}
//           style={{ pointerEvents: "none" }}
//         >
//           <Dropzone.Accept>
//             <IconUpload
//               size={52}
//               color="var(--mantine-color-blue-6)"
//               stroke={1.5}
//             />
//           </Dropzone.Accept>
//           <Dropzone.Reject>
//             <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
//           </Dropzone.Reject>
//           <Dropzone.Idle>
//             <IconPhoto
//               size={52}
//               color="var(--mantine-color-dimmed)"
//               stroke={1.5}
//             />
//           </Dropzone.Idle>

//           <div>
//             <Text size="xl" inline>
//               Drag Resume here or click to select a file
//             </Text>
//             <Text size="sm" c="dimmed" inline mt={7}>
//               Attach a file, it should not exceed 5MB
//             </Text>
//           </div>
//         </Group>
//       </Dropzone>

//       {file && (
//         <Paper withBorder shadow="xs" p="md" mt="20px">
//           <Group justify="space-between" mt="10px">
//             <div>
//               <Text>{file.name}</Text>

//               {/* Show progress only if it's below 100 */}
//               {uploadProgress < 100 && (
//                 <Stack gap={5} mt={5}>
//                   <Progress value={uploadProgress} size="sm" animated />
//                   <Text size="xs">{uploadProgress.toFixed(0)}%</Text>
//                 </Stack>
//               )}
//             </div>

//             <Button variant="subtle" color="red" size="xs" onClick={removeFile}>
//               <IconTrash size={16} />
//             </Button>
//           </Group>
//         </Paper>
//       )}
//     </div>
//   );
// };

// export default DropZone;

//New testing for displaying files in table format
import { useState } from "react";
import {
  Group,
  Text,
  Button,
  Progress,
  Table,
  Notification,
} from "@mantine/core";
import {
  IconUpload,
  IconPhoto,
  IconX,
  IconTrash,
  IconEye,
} from "@tabler/icons-react";
import {
  Dropzone,
  DropzoneProps,
  FileRejection,
  MIME_TYPES,
} from "@mantine/dropzone";

const DropZone = (props: Partial<DropzoneProps>) => {
  const [files, setFiles] = useState<{ file: File; progress: number }[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({ file, progress: 0 }));
    setFiles([...files, ...newFiles]);
    newFiles.forEach((fileObj) => simulateUpload(fileObj.file));
    setErrorMessage(null);
    setShowNotification(false);
  };

  const handleReject = (fileRejections: FileRejection[]) => {
    const errors = fileRejections.map((rejection) => {
      console.log(rejection.errors);
      return `${rejection.file.name}: ${rejection.errors
        .map((e) => e.message)
        .join(", ")}`;
    });
    setErrorMessage(errors.join("\n"));
    setShowNotification(true);
  };

  const removeFile = (fileName: string) => {
    setFiles(files.filter((f) => f.file.name !== fileName));
  };

  const simulateUpload = (file: File) => {
    let progress = 0;
    const interval = setInterval(() => {
      setFiles((prevFiles) =>
        prevFiles.map((f) =>
          f.file.name === file.name
            ? {
                ...f,
                progress: Math.min(f.progress + Math.random() * 3 + 1, 100),
              }
            : f
        )
      );

      progress += Math.random() * 3 + 1;
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <div>
      {showNotification && errorMessage && (
        <Notification
          icon={<IconX size={20} />}
          color="red"
          title="Error"
          onClose={() => setShowNotification(false)}
        >
          {errorMessage}
        </Notification>
      )}
      <Dropzone
        onDrop={handleDrop}
        onReject={handleReject}
        maxSize={5 * 1024 ** 2}
        accept={[MIME_TYPES.doc, MIME_TYPES.pdf, MIME_TYPES.docx]}
        multiple
        {...props}
        style={{
          border: "1px solid #3d3d3d",
          borderRadius: "8px",
          padding: "20px",
          cursor: "pointer",
        }}
        className="hover:!border-bright-sun-400"
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload size={52} color="#ffbd20" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              size={52}
              color="var(--mantine-color-dimmed)"
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag Docs here or click to select a file
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach multiple files, it should not exceed 5MB
            </Text>
          </div>
        </Group>
      </Dropzone>

      {files.length > 0 && (
        <Table striped highlightOnHover mt="20px" verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Preview</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Size</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {files.map(({ file, progress }) => (
              <Table.Tr key={file.name}>
                <Table.Td>
                  <Text size="sm" className="hover:!text-amber-400">
                    <a
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconEye />
                    </a>
                  </Text>
                </Table.Td>
                <Table.Td>{file.name}</Table.Td>
                <Table.Td>{(file.size / 1024).toFixed(2)} KB</Table.Td>
                <Table.Td>
                  {progress < 100 ? (
                    <Progress value={progress} size="sm" animated />
                  ) : (
                    <Text color="bright-sun.4">Completed</Text>
                  )}
                </Table.Td>
                <Table.Td>
                  <Button
                    variant="subtle"
                    color="bright-sun.4"
                    size="xs"
                    onClick={() => removeFile(file.name)}
                  >
                    <IconTrash size={16} />
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
    </div>
  );
};

export default DropZone;
