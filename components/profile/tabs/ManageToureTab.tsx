import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  IconButton,
  Wrap,
  Alert,
  AlertIcon,
  Divider,
} from '@chakra-ui/react';
import { HiDotsVertical } from 'react-icons/hi';
interface Props {}

const ManageToureTab = (props: Props) => {
  return (
    <div>
      <Alert rounded="md" size="sm" fontSize="sm" status="info">
        <AlertIcon />
        این بخش تنها به شما به عنوان مدیر تورها نشان داده می‌شود.
      </Alert>
      <Table fontSize="sm" variant="striped">
        <TableCaption>تورهای آتی</TableCaption>
        <Thead>
          <Tr>
            <Th>نام تور</Th>
            <Th>تاریخ اجرا</Th>
            <Th isNumeric>تعداد ثبت‌نامی</Th>
            <Th isNumeric>عملیات</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۷ از ۳۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button size="sm" colorScheme="primary">
                  ویرایش و جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۱۰ از ۲۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button colorScheme="primary" size="sm">
                  ویرایش و جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۵ از ۱۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button colorScheme="primary" size="sm">
                  ویرایش و جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>نام تور</Th>
            <Th>تاریخ اجرا</Th>
            <Th isNumeric>تعداد ثبت‌نامی</Th>
            <Th isNumeric>عملیات</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Divider />
      <Table fontSize="sm" variant="striped">
        <TableCaption>تورهای برگزار شده</TableCaption>
        <Thead>
          <Tr>
            <Th>نام تور</Th>
            <Th>تاریخ اجرا</Th>
            <Th isNumeric>تعداد ثبت‌نامی</Th>
            <Th isNumeric>عملیات</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۷ از ۳۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button size="sm" colorScheme="primary">
                  جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۱۰ از ۲۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button colorScheme="primary" size="sm">
                  جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
          <Tr>
            <Td>تور خلخال به اسالم</Td>
            <Td>۱۴۰۰/۰۱/۰۵</Td>
            <Td isNumeric>۵ از ۱۰</Td>
            <Td>
              <Wrap justifyContent="left">
                <Button colorScheme="primary" size="sm">
                  جزئیات
                </Button>
                <IconButton
                  bgColor="transparent"
                  size="sm"
                  aria-label="عملیات‌های بیشتر"
                  icon={<HiDotsVertical />}
                ></IconButton>
              </Wrap>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>نام تور</Th>
            <Th>تاریخ اجرا</Th>
            <Th isNumeric>تعداد ثبت‌نامی</Th>
            <Th isNumeric>عملیات</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

export default ManageToureTab;
